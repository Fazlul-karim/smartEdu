
function setActive(id){
  let links = document.getElementById("navLinks")
  let elm = document.getElementById(id);
  console.log(links);
  for (let i = 0; i < links.children.length; i++){
    links.children[i].classList.remove("hvr-active")
  }
  elm.classList.add('hvr-active')
}

function openTab(evt, name) {
  var i, tabcontent, tablinks;
  let x = document.getElementById("courseFeatures")
  let relatedCourses = document.getElementById("relatedCourses")
  tabcontent = document.getElementsByClassName("tabcontent");
  console.log(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  if(name ==="overview")
  {
    x.style.display = "block"
    relatedCourses.style.display = "block"
  }
  else
  {
    x.style.display = "none"
    relatedCourses.style.display = "none"
  }
  evt.currentTarget.className += " active";
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}