var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n){
showSlide(slideIndex += n);
}

function currentSlide(n) {
showSlide(slideIndex = n);
}

function showSlide(n){
var i;
var slides = document.getElementsByClassName("myslides");
var dots = document.getElementsByClassName("dots");
if (n > slides.length) { slideIndex = 1};
if (n < 1) { slideIndex = slides.length};
for (i=0;i<slides.length;i++) {
slides[i].style.display = "none";
};
for (i=0;i<dots.length;i++) {
dots[i].className = dots[i].className.replace(" active","");
};
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

$('#search-btn').click(function() {
    $('.search-bar').toggle();
});

$('#close-btn').click(function() {
    $('.search-bar').toggle();
});

$('.nav-icon').click(function(){
	this.classList.toggle("change");
    $('.primary-nav-wrapper').toggle();
 });

$('#search-input').click(function(){
	this.style.width="70%";
});

$('#search-input').keyup(function (e) {
    if (e.keyCode === 13) {
       alert('Ready for implementation')
    }
  });