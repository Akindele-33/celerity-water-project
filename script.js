/* =========================================================
   CELERITY WATER
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("open");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        /* Close menu when a link is clicked */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* ================= HEADER SHADOW ================= */

    const header = document.getElementById("header");

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================= ACTIVE NAV ================= */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    const updateActiveNav = () => {

        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= BACK TO TOP ================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= SMOOTH ANCHOR SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ================= CONTACT FORM ================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() || "";
            const phone = document.getElementById("phone")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const service = document.getElementById("service")?.value || "";
            const message = document.getElementById("message")?.value.trim() || "";

            if (!name || !phone || !message) {

                alert("Please fill in your name, phone number and message.");

                return;
            }


            /* Build WhatsApp message */

            let whatsappMessage =
                `Hello Celerity Water,%0A%0A` +
                `My name is ${encodeURIComponent(name)}.%0A` +
                `Phone: ${encodeURIComponent(phone)}%0A`;

            if (email) {
                whatsappMessage +=
                    `Email: ${encodeURIComponent(email)}%0A`;
            }

            if (service) {
                whatsappMessage +=
                    `Service: ${encodeURIComponent(service)}%0A`;
            }

            whatsappMessage +=
                `%0AMessage:%0A${encodeURIComponent(message)}`;


            const whatsappURL =
                `https://wa.me/2348035786168?text=${whatsappMessage}`;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

            contactForm.reset();

        });

    }


    /* ================= FOOTER YEAR ================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* ================= PREVENT EMPTY SOCIAL LINKS ================= */

    document.querySelectorAll('.social-links a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });

});