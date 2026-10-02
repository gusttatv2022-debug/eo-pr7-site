// ================================
// CURSOR
// ================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

});


// ================================
// EFEITO NO BOTÃO
// ================================

const button = document.querySelector(".instagram-button");

button.addEventListener("mouseenter", () => {

    cursor.style.width = "18px";
    cursor.style.height = "18px";

});

button.addEventListener("mouseleave", () => {

    cursor.style.width = "5px";
    cursor.style.height = "5px";

});


// ================================
// EFEITO 3D NOS CARDS
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `perspective(600px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(600px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// ================================
// EFEITO DE CLIQUE
// ================================

button.addEventListener("click", () => {

    button.style.transform = "scale(0.97)";

    setTimeout(() => {

        button.style.transform = "";

    }, 120);

});