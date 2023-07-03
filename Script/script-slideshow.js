

var slideIndex = 0;
var timer;

showSlide(slideIndex);

function changeSlide(n) {
  clearTimeout(timer);
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-active");
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("slide-active");
  timer = setTimeout(function() {
    changeSlide(1);
  }, 3000); // Delay of 3000 milliseconds (3 seconds)
}

document.getElementById("left-btn").addEventListener("click", function() {
  changeSlide(-1);
});

document.getElementById("right-btn").addEventListener("click", function() {
  changeSlide(1);
});

