/* =========================================
   CELERITYDRINKS
   CAREERS JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

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


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

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


    /* =========================
       HEADER SCROLL EFFECT
    ========================= */

    const header =
        document.querySelector(".header");

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(16, 37, 54, 0.07)";

        } else {

            header.style.boxShadow = "none";

        }

    };


    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();


    /* =========================
       SMOOTH INTERNAL LINKS
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});