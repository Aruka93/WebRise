
/* ==================================
   MOBILE MENU
================================== */


const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
}

/* ==================================
   CLOSE MOBILE MENU AFTER CLICK
================================== */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        burger.classList.remove("active");

    });

});

/* ==================================
   FAQ ACCORDION
================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(el => {

            if (el !== item) {
                el.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

/* ==================================
   REVEAL ON SCROLL
================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight * 0.85;

        if (elementTop < triggerPoint) {
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==================================
   STICKY HEADER EFFECT
================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,5,5,0.85)";

        header.style.backdropFilter =
            "blur(25px)";

        header.style.borderBottom =
            "1px solid rgba(255,255,255,.08)";

    } else {

        header.style.background =
            "transparent";

        header.style.borderBottom =
            "1px solid rgba(255,255,255,.05)";
    }

});

/* ==================================
   HERO PARALLAX GLOW
================================== */

const glow = document.querySelector(".hero-glow");

window.addEventListener("mousemove", e => {

    if (!glow) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 30;

    const y =
        (window.innerHeight / 2 - e.clientY) / 30;

    glow.style.transform =
        `translate(-50%, -50%) translate(${x}px, ${y}px)`;

});

/* ==================================
   CARD HOVER TILT
================================== */

const cards = document.querySelectorAll(
    ".glass-card, .service-card, .case-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==================================
   HERO BUTTON MAGNET EFFECT
================================== */

const magneticButtons =
    document.querySelectorAll(".btn-primary");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * .15}px, ${y * .15}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0)";

    });

});

/* ==================================
   COUNTER ANIMATION
================================== */

const counters =
    document.querySelectorAll("[data-counter]");

const runCounter = counter => {

    const target =
        Number(counter.dataset.counter);

    let current = 0;

    const increment =
        target / 120;

    const update = () => {

        current += increment;

        if (current < target) {

            counter.innerText =
                Math.floor(current);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;
        }

    };

    update();
};

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(
                entry.target
            );
        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==================================
   SMOOTH SECTION APPEAR
================================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform:
                        "translateY(50px)"
                    },
                    {
                        opacity: 1,
                        transform:
                        "translateY(0)"
                    }
                ],
                {
                    duration: 800,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

        }

    });

}, {
    threshold: 0.15
});

document
.querySelectorAll("section")
.forEach(section => {

    observer.observe(section);

});

/* ==================================
   ACTIVE NAVIGATION
================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");
        }

    });

});

/* ==================================
   FLOATING ELEMENTS
================================== */

const floating =
    document.querySelectorAll(
        ".floating-card"
    );

window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;

    floating.forEach((item, index) => {

        const speed =
            (index + 1) * 0.15;

        item.style.transform =
            `translateY(${scrollY * speed}px)`;

    });

});

/* ==================================
   PRELOADER (READY FOR FUTURE)
================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==================================
   PAGE TRANSITION
================================== */

document
.querySelectorAll("a")
.forEach(link => {

    const href =
        link.getAttribute("href");

    if (
        href &&
        !href.startsWith("#")
    ) {

        link.addEventListener(
            "click",
            e => {

                document.body.classList.add(
                    "page-leave"
                );

            }
        );

    }

});

/* ==================================
   CONSOLE SIGNATURE
================================== */

console.log(
`
██╗    ██╗███████╗██████╗ ██████╗ ██╗███████╗███████╗
██║    ██║██╔════╝██╔══██╗██╔══██╗██║██╔════╝██╔════╝
██║ █╗ ██║█████╗  ██████╔╝██████╔╝██║███████╗█████╗
██║███╗██║██╔══╝  ██╔══██╗██╔══██╗██║╚════██║██╔══╝
╚███╔███╔╝███████╗██████╔╝██║  ██║██║███████║███████╗
 ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝

Premium Digital Agency
`);

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

});

document
.querySelectorAll("a, button")
.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "70px";
        cursor.style.height = "70px";
        cursor.style.borderColor = "#4d7cff";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.borderColor =
        "rgba(255,255,255,.4)";

    });

});


document
.querySelectorAll(
".glass-card,.service-card,.portfolio-card"
)

.forEach(card => {

    card.addEventListener(
    "mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        card.style.setProperty(
        "--x",
        `${e.clientX - rect.left}px`
        );

        card.style.setProperty(
        "--y",
        `${e.clientY - rect.top}px`
        );

    });

});
