window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

// WHATSAPP POPUP

const waButton = document.getElementById("waButton");
const waPopup = document.getElementById("waPopup");

waButton.addEventListener("click", function () {
    if (waPopup.style.display === "block") {
        waPopup.style.display = "none";
    } else {
        waPopup.style.display = "block";
    }
});

// CLOSE POPUP IF CLICK OUTSIDE

document.addEventListener("click", function (event) {
    if (!waPopup.contains(event.target) && !waButton.contains(event.target)) {
        waPopup.style.display = "none";
    }
});

// SMOOTH SCROLL MENU

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const reveal = document.querySelectorAll("section");

function revealOnScroll() {
    let windowHeight = window.innerHeight;
    reveal.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 120) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

reveal.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
});

// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll(".product-card");

window.addEventListener("scroll", function () {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }
    });
});

// INITIAL STATE

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});

// PARALLAX HERO EFFECT

window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + "px";
});

const form = document.querySelector(".quote-form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let company = form.querySelector("input").value;
        let text = "Hello, I want quotation from " + company;
        window.open("https://wa.me/6285158822803?text=" + encodeURIComponent(text));
    });
}

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
    let windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element",
    );
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";
});

document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var spec = document.getElementById("spec").value;
    var message =
        "Hello PT Mitra Nayla Jaya,%0A%0A" +
        "Company: " + company + "%0A" +
        "Email: " + email + "%0A" +
        "Country: " + country + "%0A" +
        "Product: " + product + "%0A" +
        "Quantity: " + quantity + " tons%0A" +
        "Specification: " + spec;
    var phone = "6285158822803";
    window.open("https://wa.me/" + phone + "?text=" + message);
});

function toggleChat() {
    var box = document.getElementById("chatBox");
    if (box.style.display == "flex") {
        box.style.display = "none";
    } else {
        box.style.display = "flex";
    }
}

function handleKey(event) {
    if (event.key === "Enter") {
        var input = document.getElementById("chatInput");
        var msg = input.value;
        if (msg.trim() == "") return;
        var chat = document.getElementById("chatMessages");
        chat.innerHTML += "<div class='user-message'>" + msg + "</div>";
        input.value = "";
        setTimeout(function () {
            // chat.innerHTML += "<div class='bot-message'>Thank you. Please contact our sales team via WhatsApp.</div>";
            chat.innerHTML += "<div class='bot-message'>Thank you. Please continue to WhatsApp for faster response.<br><br><a href='https://wa.me/6285158822803'>Chat Sales</a></div>";
        }, 800);
    }
}
