/*==================================================
        PORTAFOLIO KEVIN RODRÍGUEZ
        main.js
==================================================*/

//========================================
// Typed.js
//========================================

document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector("#typing")) {

        new Typed("#typing", {

            strings: [

                "Desarrollador Python",
                "Especialista en Inteligencia Artificial",
                "Licenciado en Electrónica",
                "Desarrollador Flask",
                "Arduino Developer",
                "Docente de Tecnología"

            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1800,
            loop: true

        });

    }

});

//========================================
// Partículas
//========================================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#00d4ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: .5
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#00d4ff",

                opacity: .2,

                width: 1

            },

            move: {

                enable: true,

                speed: 1.5,

                direction: "none",

                random: false,

                straight: false,

                out_mode: "out"

            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {

                    enable: true,

                    mode: "grab"

                },

                onclick: {

                    enable: true,

                    mode: "push"

                }

            },

            modes: {

                grab: {

                    distance: 180,

                    line_linked: {

                        opacity: .7

                    }

                },

                push: {

                    particles_nb: 4

                }

            }

        },

        retina_detect: true

    });

}

//========================================
// Animación del menú
//========================================

const menuLinks = document.querySelectorAll(".sidebar a");

menuLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.boxShadow =
            "0 0 25px rgba(0,212,255,.3)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.boxShadow = "none";

    });

});

//========================================
// Efecto al hacer scroll
//========================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    const scroll = window.scrollY;

    hero.style.transform =
        `translateY(${scroll * 0.08}px)`;

});

//========================================
// Cursor de luz
//========================================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

//========================================
// Fade de secciones
//========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/*===========================

GITHUB API

===========================*/

fetch("https://api.github.com/users/KEVINR06")

.then(response => response.json())

.then(data => {

document.getElementById("github-avatar").src=data.avatar_url;

document.getElementById("github-name").innerText=data.name;

document.getElementById("github-bio").innerText=data.bio;

document.getElementById("repos").innerText=data.public_repos;

document.getElementById("followers").innerText=data.followers;

document.getElementById("following").innerText=data.following;

document.getElementById("github-link").href=data.html_url;

});