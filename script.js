
console.log("My portfolio website is running!");

// Reveal sections when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


/* Contact Form Demo */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formStatus.textContent =
            "Thank you! Your message form is working!";

        contactForm.reset();
    });
}


/* Dark / Light Mode */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            themeToggle.textContent = "☀️ Light Mode";
        }
    });
}


/* Typing Animation */

const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Developer",
        "Programmer",
        "Tech Enthusiast",
        "Web Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 120);
    }

    typeEffect();
}

/* Back to Top Button */
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}