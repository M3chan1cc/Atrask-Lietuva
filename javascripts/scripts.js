function openVideo(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
	function openVideo(url) {
		window.open(url, '_blank');
	}

	var placeEntries = document.querySelectorAll('.place-entry');

	placeEntries.forEach(function(entry) {
		entry.addEventListener('click', function() {
			var videoUrl = entry.getAttribute('data-video-url');
			openVideo(videoUrl);
		});
	});

	var toggle = document.querySelector(".ham");
	var nav = document.querySelector("nav");

	toggle.addEventListener("click", function() {
		nav.classList.toggle("active");
	});

	var exploreLink = document.querySelector(".content a");
	var placesSection = document.querySelector(".places");

	if (exploreLink && placesSection) {
		exploreLink.addEventListener("click", function(event) {
			event.preventDefault();
			placesSection.scrollIntoView({ behavior: "smooth" });
		});
	}

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

	var navLinks = document.querySelectorAll("nav a");

	navLinks.forEach(function(link) {
		link.addEventListener("click", function(event) {
			event.preventDefault();
			var targetId = this.getAttribute("href").substring(1);
			var targetSection = document.getElementById(targetId);

			if (targetSection) {
				targetSection.scrollIntoView({ behavior: "smooth" });
			}
		});
	});

	toggle.addEventListener("click", function() {
		nav.classList.add("active");
	});


	nav.addEventListener("click", function() {
		nav.classList.remove("active");
	});
});

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
	link.addEventListener("click", function(event) {
		event.preventDefault();
		var targetId = this.getAttribute("href").substring(1);
		var targetSection = document.getElementById(targetId);

		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" });
		}
	});
});