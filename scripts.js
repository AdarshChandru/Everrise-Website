// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow functionality for images
// Slideshow functionality for images
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 5.5 seconds to allow fade animation to complete
}


// Scrolling functionality for the projects section
document.querySelector('.left-nav').addEventListener('click', function() {
    document.querySelector('.projects-container').scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.right-nav').addEventListener('click', function() {
    document.querySelector('.projects-container').scrollBy({ left: 300, behavior: 'smooth' });
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});



