document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Loaded");


    // =========================
    // DARK MODE
    // =========================

    const darkModeBtn =
        document.getElementById("darkModeBtn");


    // Check saved dark mode

    if (
        localStorage.getItem("darkMode")
        === "enabled"
    ) {

        document.body.classList.add("dark");

        darkModeBtn.textContent = "☀️";

    }


    darkModeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");


            if (
                document.body.classList.contains("dark")
            ) {

                darkModeBtn.textContent = "☀️";

                localStorage.setItem(
                    "darkMode",
                    "enabled"
                );

            } else {

                darkModeBtn.textContent = "🌙";

                localStorage.setItem(
                    "darkMode",
                    "disabled"
                );

            }

        }
    );


    // =========================
    // TYPING EFFECT
    // =========================

    const typing =
        document.getElementById("typing");


    const words = [

        "Computer Engineering Student",

        "Future Software Engineer",

        "Web Developer",

        "Arduino Enthusiast"

    ];


    let wordIndex = 0;

    let letterIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typing.textContent =
                currentWord.substring(
                    0,
                    letterIndex + 1
                );

            letterIndex++;


            if (
                letterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typing.textContent =
                currentWord.substring(
                    0,
                    letterIndex - 1
                );

            letterIndex--;


            if (letterIndex === 0) {

                deleting = false;

                wordIndex++;


                if (
                    wordIndex >= words.length
                ) {

                    wordIndex = 0;

                }

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 100
        );

    }


    typeEffect();


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealElements =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        revealElements.forEach(
            function (element) {

                const position =
                    element.getBoundingClientRect().top;


                const screenHeight =
                    window.innerHeight;


                if (
                    position <
                    screenHeight - 80
                ) {

                    element.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    // Run immediately

    revealOnScroll();


    // =========================
    // SKILL BAR ANIMATION
    // =========================

    const skillBars =
        document.querySelectorAll(".fill");


    function animateSkills() {

        skillBars.forEach(
            function (bar) {

                const position =
                    bar.getBoundingClientRect().top;


                const screenHeight =
                    window.innerHeight;


                if (
                    position <
                    screenHeight - 50
                ) {

                    bar.style.width =
                        bar.dataset.width;

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        animateSkills
    );


    animateSkills();


    // =========================
    // CARD CLICK ANIMATION
    // =========================

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    card.style.transform =
                        "scale(0.94)";


                    setTimeout(
                        function () {

                            card.style.transform =
                                "";

                        },
                        150
                    );

                }
            );

        }
    );


});