/* =========================================
   GLOBAL SCRIPT (Common for ALL Pages)
   - Navbar Toggle
   - Scroll Animations
   - Particles
   - Parallax Text
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVBAR TOGGLE (Mobile) ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    if (mobileMenuBtn && navLinks) {
        // Toggle Menu
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking any link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // --- 2. NAVBAR SCROLL EFFECT (Blur/Shadow) ---
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- 3. SCROLL REVEAL ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));


    // --- 4. PARTICLES ANIMATION (Background) ---
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            let size = Math.random() * 3 + 1;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}vw`;
            p.style.top = `${Math.random() * 100}vh`;
            p.style.animationDelay = `-${Math.random() * 20}s`;
            p.style.opacity = Math.random() * 0.5;
            particlesContainer.appendChild(p);
        }
    }

    // --- 5. PARALLAX BACKGROUND TEXT ---
    const bgText = document.querySelector('.bg-large-text');
    if (bgText) {
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`; // Adjust speed here
            bgText.style.opacity = 1 - (scroll * 0.001);
        });
    }

});