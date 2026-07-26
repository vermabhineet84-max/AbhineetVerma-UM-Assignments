```javascript
/* =========================================================
   ABHINEET VERMA
   DATA ANALYST PORTFOLIO
   SIMPLE + STABLE FUTURISTIC JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. NAVBAR
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbar() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();


    /* =====================================================
       2. SMOOTH SCROLLING
       ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       3. ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                sectionTop - 200
                &&
                window.scrollY <
                sectionTop + sectionHeight - 200
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();


    /* =====================================================
       4. SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-card, .skill-card, .project-card, .contact-box"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =====================================================
       5. DATA CORE 3D EFFECT
       ===================================================== */

    const dashboard =
        document.querySelector(".dashboard-card");


    if (dashboard) {

        dashboard.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    dashboard.getBoundingClientRect();

                const mouseX =
                    event.clientX - rect.left;

                const mouseY =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (mouseY - centerY) /
                    25;

                const rotateY =
                    (centerX - mouseX) /
                    25;


                dashboard.style.transform =
                    "perspective(900px) " +
                    "rotateX(" + rotateX + "deg) " +
                    "rotateY(" + rotateY + "deg)";

            }
        );


        dashboard.addEventListener(
            "mouseleave",
            function () {

                dashboard.style.transform =
                    "perspective(900px) " +
                    "rotateX(5deg) " +
                    "rotateY(-8deg)";

            }
        );

    }


    /* =====================================================
       6. PROJECT CARD EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.zIndex = "5";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.zIndex = "1";

            }
        );

    });


    /* =====================================================
       7. SKILL CARD EFFECT
       ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.transform =
                    "translateY(-10px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       8. EXTERNAL LINKS
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(function (link) {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       9. CURRENT YEAR
       ===================================================== */

    const footer =
        document.querySelector("footer");


    if (footer) {

        const footerText =
            footer.querySelector("p");


        if (footerText) {

            const currentYear =
                new Date().getFullYear();

            footerText.textContent =
                "© " +
                currentYear +
                " Abhineet Verma";

        }

    }


    /* =====================================================
       10. SYSTEM MESSAGE
       ===================================================== */

    console.log(
        "Abhineet Verma Portfolio loaded successfully."
    );

});
```
