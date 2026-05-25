import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { handleContactPost } from "./server/handleContact.mjs";

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

/** Dev server: same /api/contact as Vercel — branded Aurex emails via Resend */
function contactApiDevPlugin() {
  return {
    name: "aurex-contact-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split("?")[0];
        if (path !== "/api/contact") {
          return next();
        }

        const env = loadEnv("development", process.cwd(), "");

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const raw = await readBody(req);
          const data = JSON.parse(raw || "{}");
          const result = await handleContactPost(data, env);
          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.body));
        } catch {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Server error" }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), contactApiDevPlugin()],
});
