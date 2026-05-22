import { usePageMeta } from "../hooks/usePageMeta";
import LegalPageLayout from "../components/LegalPageLayout";
import { COMPANY, PAGE_META } from "../data/company";
import {
  RiShieldCheckLine,
  RiBuildingLine,
  RiDatabase2Line,
  RiSettings3Line,
  RiShareLine,
  RiLockLine,
  RiUserLine,
  RiMailLine,
} from "react-icons/ri";

const SECTIONS = [
  {
    id: "who",
    title: "Who we are",
    icon: RiBuildingLine,
    body: (
      <p>
        <strong>{COMPANY.legalName}</strong> ({COMPANY.name}) runs this website to share our IT
        services and receive project inquiries. Our office: {COMPANY.address}.
      </p>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    icon: RiDatabase2Line,
    body: (
      <p>
        When you contact us, we may receive your name, email, company, phone, project details,
        and anything else you choose to share. We also log standard technical data (browser,
        pages visited) through normal hosting and analytics.
      </p>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    icon: RiSettings3Line,
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Reply to inquiries and discuss IT projects</li>
          <li>Prepare proposals, statements of work, and contracts</li>
          <li>Improve our website and communications</li>
          <li>Meet legal obligations when required</li>
        </ul>
      </>
    ),
  },
  {
    id: "share",
    title: "Sharing",
    icon: RiShareLine,
    body: (
      <p>
        We do <strong>not</strong> sell personal data. We may share information with trusted
        providers (hosting, email) under confidentiality, or when the law requires it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Retention & security",
    icon: RiLockLine,
    body: (
      <p>
        We keep inquiry records as long as needed for business and legal purposes. We use
        reasonable safeguards—but no online system is 100% secure.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    icon: RiUserLine,
    body: (
      <p>
        You can request access, correction, or deletion of your data by emailing{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    icon: RiMailLine,
    body: (
      <p>
        Privacy questions:{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · {COMPANY.phone}
      </p>
    ),
  },
];

export default function Privacy() {
  usePageMeta(PAGE_META.privacy);

  return (
    <LegalPageLayout
      title="Privacy Policy"
      tagline="A short, clear overview of how we handle information when you use our site or get in touch."
      icon={RiShieldCheckLine}
      updated="May 2025"
      sections={SECTIONS}
      siblingLink={{ label: "Terms of Use", to: "/terms" }}
    />
  );
}
