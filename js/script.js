// Banner autoslide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


// Message me section
function displayMessage() {
    document.getElementById("currentTime").innerText = new Date().toString();
    document.getElementById("outName").innerText = document.getElementById("name").value;
    document.getElementById("outDob").innerText = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    document.getElementById("outGender").innerText = gender ? gender.value : "";
    document.getElementById("outMessage").innerText = document.getElementById("message").value;
}
