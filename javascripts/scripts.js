// Function to open a YouTube video in a new tab
function openVideo(url) {
    window.open(url, '_blank');
}

// Attach event listeners to all place images
document.addEventListener('DOMContentLoaded', function() {
    // Select all place-entry elements
    var placeEntries = document.querySelectorAll('.place-entry');

    // Add click event listener to each place-entry
    placeEntries.forEach(function(entry) {
        entry.addEventListener('click', function() {
            var videoUrl = entry.getAttribute('data-video-url');
            openVideo(videoUrl);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu
    var toggle = document.querySelector(".ham");
    var nav = document.querySelector("nav");

    toggle.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    // Smooth scroll to 'Explore Our Top Places' section
    var exploreLink = document.querySelector(".content a");
    var placesSection = document.querySelector(".places");

    if (exploreLink && placesSection) {
        exploreLink.addEventListener("click", function(event) {
            event.preventDefault();
            placesSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Show 'Scroll to Top' button on scroll
    var scrollToTopBtn = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var toggle = document.querySelector(".ham");
    var nav = document.querySelector("nav");

    toggle.addEventListener("mouseover", function() {
        nav.classList.add("active");
    });

    toggle.addEventListener("mouseout", function() {
        nav.classList.remove("active");
    });

    // Optional: To keep the nav open if the mouse is over the nav itself
    nav.addEventListener("mouseover", function() {
        nav.classList.add("active");
    });

    nav.addEventListener("mouseout", function() {
        nav.classList.remove("active");
    });
});