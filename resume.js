// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 40, // Adjust scroll position if you have a fixed header
                behavior: 'smooth'
            });
        }
    });
});


// Javascript for the navigation drop-down

    const dropdownIcon = document.getElementById("dropdown-icon");
    const navLinks = document.getElementById("nav-links");

    dropdownIcon.addEventListener("mouseenter", function() {
        navLinks.style.display = "block";

        // Add a click event listener to each navigation link
        const links = navLinks.getElementsByTagName("a");
        for (const link of links) {
            link.addEventListener("click", function() {
                // close the dropdown after clicking a link
                navLinks.style.display = "block";
            });
        }
    });

    navLinks.addEventListener("mouseleave", function() {
        navLinks.style.display = "none";
    });



