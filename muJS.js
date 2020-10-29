function DropFunction() {
    document.getElementById("dropdown-content").classList.toggle("show");
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
var slides = document.getElementsByClassName("Slide");
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
document.getElementById("submitBtn").addEventListener("click", myFunction);
function myFunction() {
    if(document.getElementById("idName").value.length>3 && document.getElementById("passID").value.length>5)
    { 
         if(document.getElementById("idName").value == "ahmedhassan@mu.edu")
        {
            alert("Welcome Admin : Ahmed");
        }
        else if(document.getElementById("idName").value =="mohamedyasser@mu.edu" )
        {
            alert("Welcome Admin : Mohamed");
        }
        else if(document.getElementById("idName").value == "youssefshazly@mu.edu")
        {
            alert("Welcome Admin : Youssef");
        }
        else if(document.getElementById("idName").value == "ahmedsamy@mu.edu")
        {
            alert("Welcome Admin : Samy");    
        }
        window.location.href="MerrylandUniversity.html";
    }
}