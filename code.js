// mygtukas kad keistusi tekstas-------------
var currentTextIndex = 0;
let tekstas1 = "I stole, and I robbed, and I kidnapped the President’s son and held him for ransom";
let tekstas2 = "The worst thing about prison was the — was the Dementors. They were flying all over the place, and they were scary, and then they'd come down, and they'd suck the soul out of your body, and it hurt!";
let tekstas3 = "Close your eyes. Picture a convict. What’s he wearing? Nothing special—baseball cap on backward, baggy pants. He says something ordinary like, ‘Yo, that’s shizzle.’ Okay, now slowly open your eyes again. Who are you picturing? A Black man? Wrong. That was a White woman. Surprised? Well, shame on you.";
let tekstas4 = "Look, prison stinks, is what I'm saying. It's not like you can go home, recharge your batteries, come back in the morning, and be with your friends having fun in the office.";
let tekstas5 = "You, my friend, would be da belle of da ball. Don't drop the soap! Don't drop the soap!";

var texts = [tekstas1, tekstas2, tekstas3, tekstas4, tekstas5];

function switchText() {
  var element = document.getElementById("myElement");
  var newText = texts[currentTextIndex];
  element.textContent = newText;
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}


let mygtukas = document.querySelector("button");

// Add an event listener to listen for a click event
mygtukas.addEventListener("click", changeBackgroundColor);

// Function to change the background color
function changeBackgroundColor() {
  // Generate a random color
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
  // Change the background color of the element
document.body.style.backgroundColor = randomColor;
}

// let elementas = document.querySelector('button');

// mygtukas.addEventListener("mouseenter", ())

// java_script funkcija su console.log-------------------------------------------------


function konsole() {
 console.log("Welcome to Michael's Scott's portfolio");
}
 konsole();

// sitas nukopijuotas is interneto---------------------------------------------------------

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// sitas nukopijuotas is chatgpt. nepykit bet labai norejau kad sklandziai spaudinetusi :D---------
document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.menu');

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const targetOffsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 180; // Adjust the offset as needed

        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});