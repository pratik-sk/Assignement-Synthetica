//++++++++++++++++Carousal Script++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++Navigation Toggle+++++++++++++++++++++++++++++//
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

//+++++++++++++++Search Menu Behaviour+++++++++++++++++++++++//
$('#search-input').click(function(){
	this.style.width="70%";
});

$('#search-input').keyup(function (e) {
    if (e.keyCode === 13) {
       alert('Ready for implementation')
    }
  });


//++++++++++++++++++Counter Increment Script++++++++++++++++++++++++//

function awardCounter(elementName,val,lastVal){
 var finalval=document.getElementById(elementName);

 finalval.innerHTML=val;
 val++;
 
 var timeOut=setTimeout("awardCounter('"+elementName+"',"+val+","+lastVal+")",80);
 if(val==lastVal){
   finalval.innerHTML=val;
   clearTimeout(timeOut);
 }
}
// awardCounter("awardCount",0,24);

function articleCounter(val){
 var finalval=document.getElementById("articleCount");
 finalval.innerHTML=val;
 val++;
 var timeOut=setTimeout("articleCounter("+val+")",2);
 if(val==341){
   finalval.innerHTML=val;
   clearTimeout(timeOut);
 }
}
// articleCounter(0);

function freebiesCounter(val){
 var finalval=document.getElementById("freebiesCount");
 finalval.innerHTML=val;
 val++;
 var timeOut=setTimeout("freebiesCounter("+val+")",40);
 if(val==43){
   finalval.innerHTML=val;
   clearTimeout(timeOut);
 }
}
// freebiesCounter(0);

//+++++++++++++++++Progress Bar Scrip++++++++++++++++++++++++++++++++//
function progressBar(val){
 var expDesignCountBar=document.getElementById("expDesignCountBar");
 var interactivePrototypeCountBar=document.getElementById("interactivePrototypeCountBar");
 var htmlSkillCountBar=document.getElementById("htmlSkillCountBar");
 var visulaDesignCountBar=document.getElementById("visulaDesignCountBar");
 
 expDesignCountBar.value=val;
 interactivePrototypeCountBar.value=val;
 htmlSkillCountBar.value=val;
 visulaDesignCountBar.value=val;
 
 val++;
 
 var timeOut=setTimeout("progressBar("+val+")",20);
 if(val==85){
   expDesignCountBar.value=90;
   interactivePrototypeCountBar.value=80;
   htmlSkillCountBar.value=95;
   visulaDesignCountBar.value=90;
   clearTimeout(timeOut);
 }
}

//++++++++++++++++++++Social Share nav+++++++++++++++++++++++++++//

$('#social-share').click(function(){
	$(".social-media-share").toggle();
});

//++++++++++++++++++++++Navigate to Div++++++++++++++++++++++++//
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },1000);
});

$(".footer-primary-nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },1000);
});

// function testScroll(ev){
//     if(window.pageYOffset>2000){
//     	progressBar(0);
//     	$(window).off("scroll");
//     }
// }
// window.onscroll=testScroll
window.onscroll = myScroll;
var counter = 0; // Global Variable
function myScroll(){
   //var val = document.getElementById("value");
   //val.innerHTML = 'pageYOffset = ' + window.pageYOffset;
   if(counter == 0){ // if counter is 1, it will not execute
     if(window.pageYOffset > 1500){
     	progressBar(0);
     	awardCounter("awardCount",0,24);
 		articleCounter(0);
 		freebiesCounter(0);
        counter++; // increment the counter by 1, new value = 1
     }
   }
  }