document.addEventListener("DOMContentLoaded", function () {

    /* === HERO SLIDER ===*/

    const heroImages = [
        "images/art.png",
        "images/art_1.png",
        "images/art_2.png",
        "images/art_2b.png",
        "images/art_3.png",
        "images/art_4.png",
        "images/art_5.png",
        "images/art_6.png"
    ];

    let heroIndex = 0;
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.backgroundImage = `url('${heroImages[0]}')`;

        setInterval(() => {
            heroIndex = (heroIndex + 1) % heroImages.length;
            hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
        }, 4000);
    }

    /* === GALLERY CLICK SWAP ==== */

    let galleries = [
        ["images/art_1.png", "images/art_1b.png", "images/art_1c.png"],
        ["images/art_2.png", "images/art_2b.png", "images/art_2c.png"],
        ["images/art_3.png", "images/art_3b.png", "images/art_3c.png"],
        ["images/art_4.png", "images/art_4b.png", "images/art_4c.png"],
        ["images/art_5.png", "images/art_5b.png", "images/art_5c.png"]
    ];

    let currentIndexes = [0, 0, 0, 0, 0];

    window.changeArt = function (imageId, galleryIndex) {

        currentIndexes[galleryIndex]++;

        if (currentIndexes[galleryIndex] >= galleries[galleryIndex].length) {
            currentIndexes[galleryIndex] = 0;
        }

        document.getElementById(imageId).src =
            galleries[galleryIndex][currentIndexes[galleryIndex]];
    };

    /* ===== LIGHTBOX ===== */

    window.openLight = function (img) {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = img.src;
    };

    window.closeLight = function () {
        document.getElementById("lightbox").style.display = "none";
    };

    /* == FORM VALIDATION == */

    window.validateForm = function () {

        let name = document.forms["contactForm"]["name"].value;
        let email = document.forms["contactForm"]["email"].value;

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name == "") {
            alert("Name is required");
            return false;
        }

        if (email == "") {
            alert("Email is required");
            return false;
        }

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email");
            return false;
        }

        alert("Form submitted successfully!");
        return true;
    };

});
setTimeout(() => {
    document.querySelector(".hidden-message").style.display = "block";
}, 2000);