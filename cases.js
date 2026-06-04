const filterButtons =
document.querySelectorAll(".filter-btn");

const portfolioCards =
document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        portfolioCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform =
                    "translateY(0)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform =
                "translateY(20px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }

        });

    });

});