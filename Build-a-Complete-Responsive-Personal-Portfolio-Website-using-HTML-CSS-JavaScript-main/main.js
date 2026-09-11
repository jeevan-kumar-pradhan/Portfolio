var typed = new Typed(".text", {
    strings: [
        "Java Full Stack Developer",
        "Java Developer",
        "Spring Boot Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Navigation between sections

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const sectionId = this.getAttribute("data-section");

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        // Show selected section
        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.classList.add("active-section");
        }

        // Change active navigation
        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});