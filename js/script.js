
/* =================================
   1. MOBILE NAVIGATION
================================= */

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-toggle");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");
menuButton.setAttribute("aria-expanded", "false");

navbar.insertBefore(menuButton, navLinks);

// Toggle mobile menu
menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.innerHTML = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


/* =================================
   2. ACTIVE NAVIGATION LINK
================================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });

});


/* =================================
   3. SCROLL TO TOP BUTTON
================================= */

// Create button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.classList.add("scroll-top");
topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);

// Show button when scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

// Scroll to top when clicked
topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =================================
   4. SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
    "#about, #skills, #projects, #contact, .skill-card, .project-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =================================
   5. DYNAMIC COPYRIGHT YEAR
================================= */

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()}
        My Portfolio. All rights reserved.</p>
    `;
}


/* =================================
   6. CONSOLE MESSAGE
================================= */

console.log("Portfolio website loaded successfully!");
