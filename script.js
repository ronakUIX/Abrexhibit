function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  }
  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000); // Change every 3 seconds

// const slide = document.querySelectorAll('.background-slide');
// let currentSlides = 0;

// function changeSlide() {
//     slides.forEach((slide, index) => {
//         slide.style.opacity = index === currentSlides ? '1' : '0';
//     });
//     currentSlides = (currentSlides + 1) % slides.length;
// }

// setInterval(changeSlide, 3000);

 let images = document.querySelectorAll('.background-slide img');
        let currentIndex = 0;

        function slideImages() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(slideImages, 3000); // Change image every 3 seconds
        

 