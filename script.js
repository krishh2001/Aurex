document.addEventListener("DOMContentLoaded", () => {

    // --- PARALLAX BACKGROUND TEXT ---
    const bgText = document.querySelector(".bg-large-text");
    if (bgText) {
        window.addEventListener("scroll", () => {
            const scroll = window.scrollY;
            bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
            bgText.style.opacity = 1 - scroll * 0.001;
        });
    }

    // --- PARTICLES ---
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement("div");
            p.classList.add("particle");

            const size = Math.random() * 3 + 1;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}vw`;
            p.style.top = `${Math.random() * 100}vh`;
            p.style.animationDelay = `-${Math.random() * 20}s`;
            p.style.opacity = Math.random() * 0.5;

            particlesContainer.appendChild(p);
        }
    }

    // --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach((el) => revealObserver.observe(el));
    }

    // --- ORBITAL SLIDER (SAFE CHECK) ---
    if (typeof initOrbitalSlider === "function") {
        initOrbitalSlider();
    }

    // --- TECH STACK ANIMATION (SAFE CHECK) ---
    if (typeof initTechStack === "function") {
        initTechStack();
    }
});


// ===============================
// MOBILE MENU TOGGLE
// ===============================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        }
    });

    // Close menu when clicking any link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        });
    });
}


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener("scroll", () => {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});
