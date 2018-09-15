function updateProjectSlide(change, slideshow, dot, increment) {
  // get slides and dots
  let slides = document.getElementsByClassName(slideshow);
  let dots = document.getElementsByClassName(dot);

  // get index for current slide (and dot)
  let currentIndex = 0;
  while ( slides[currentIndex].style.display == "none") currentIndex++;

  // disable @ current index
  slides[currentIndex].style.display = "none";
  dots[currentIndex].className = dots[currentIndex].className.replace(" active", "");

  // set newIndex (increment or goto)
  currentIndex = increment ? ( currentIndex + slides.length + change ) % slides.length : change;

  // enable @ current index
  slides[currentIndex].style.display = "flex";
  dots[currentIndex].className += " active";
}