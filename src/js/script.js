// CACHE DOM
const menuBar = $('.main-bar')
const searchField = $('.search');
const logo = $('.logo');
const mainNav = $('.main-nav');
const closeSearchButton = $('.search-icon');
const searchIcons = $(".search-icons");
const searchButton = $('.searchButton');
const mainSlider = $('.main-slider');
const sliderArrows = $('.slider-arrow');
const leftArrow = $('.arrow-left-slider');
const rightArrow = $('.arrow-right-slider');
const appear = $('.appear');
const mainPhoto = $('.main-photo');
const zoom = $(".zoom");
const mobileNav = $('.mobile-nav');
const navIcon = $('#nav-icon1');
const owlOne = $(".owl-one");
const owlTwo = $(".owl-two")


$(document).ready(function(){

  // OWL CAROUSEL SETTINGS //
  // Owl one//
    owlOne.owlCarousel({
     loop:true,
     autoplay:true,
     autoplayTimeout:2000,
     autoplayHoverPause:true,
     responsive:{
     0:{
        items:1,
       nav:true
     },
     600:{
       items:1,
       nav:true
     },
     1000:{
      items:2,
       margin:10,
       nav:true
     },
     1300:{
       items:3
     }
               }
    });
    // owl Two//
    owlTwo.owlCarousel({
    center: true,
    loop:true,
    autoWidth:true,
    autoHeight:true,
    items:1,
    responsive:{
    0:{
      margin:100,
      items:1,
    },
    600:{
      margin:100,
      items:1
    },
    1000:{
      margin:100,
      items:1,
    }
              }
})
// Menu fixed on scroll
$(window).scroll(function(){
  if ($(window).scrollTop() > 50) {
    menuBar.addClass('scrollBar');
  }else{
    menuBar.removeClass('scrollBar');
  }
});

//Gallery Animation
function showFullImage() {
$(this).toggleClass("main-photo2");
$(this).toggleClass("photo-gallery");
$(this).removeClass('show-zoom')
}

function showMagifier() {
   $(this).children(".zoom").toggleClass('show-zoom');
}
// BURGER menu

  function toggleNavigation() {
    navIcon.toggleClass('open')
  };
function slideNav() {
  mainNav.slideToggle()
};
// NAVIGATON CLICK //
$('.has-children').click(function(){
  $(this).children('.submenu').slideToggle();
});
$('.submenu').click(function(){
  $('.submenu2').slideToggle();

});
$('.dot').click(function(){
    $(".mobile-informations").slideToggle()
});






//HIDE NAVIGATION //
function hideNavigation() {
  logo.fadeOut( 200);
  mainNav.fadeOut(200);
  searchButton.fadeOut(200);
  searchField.fadeIn(200);
}
// SHOW NAVIATION //
function showNavigation() {
  logo.fadeIn(200);
  mainNav.fadeIn(200);
  searchButton.fadeIn(200);
  searchField.fadeOut(200);
}

// SHOWING ARROWS ON SLIDER //
let arrowMargin = 0;
if ($(window).width() < 350) {
  arrowMargin = "2rem";
}else{
  arrowMargin = "5rem";
}

function showSliderArrows() {
  rightArrow.animate({
    right: arrowMargin
  },300);
  leftArrow.animate({
    left: arrowMargin
  },300)
}
function hideSliderArrows() {
  rightArrow.animate({
    right: "-5rem"
  },300);
  leftArrow.animate({
    left: "-5rem"
  },300)
}
// SLIDER FUNCTIONALITY //
let current = 0;
let sliderCount = $('.slide');
function reset() {
  for (let i = 0; i < sliderCount.length; i++) {
    sliderCount[i].style.display = 'none';
  }
}
// Init slider
function startSlide() {
  reset();
  sliderCount[0].style.display = "flex";
}
// Show previous
function slideLeft(){
  reset();
  sliderCount[current - 1].style.display = "flex";
  current --;
}
//show next
function slideRight(){
  reset();
  sliderCount[current + 1].style.display = "flex";
  current++;
}

startSlide();

// POP UP SLIDER //
function resetSlider() {
  appear.hide();
}

function ShowSlider() {
  resetSlider();
appear.slideDown(500);
}

function checkCurrentSlide() {
  if (current === 0) {
    current = sliderCount.length;
}};

function checkCurrentSlide2() {
  if (current === sliderCount.length -1) {
    current =-1
  }};

// ARROW FUNCTIONALITY //
function arrowSliderLeft() {
  checkCurrentSlide();
  slideLeft();
  ShowSlider();
}
function arrowSliderRight() {
  checkCurrentSlide2();
  slideRight();
  ShowSlider();
}

// EVENT LISTENERS //

//gallery
  mainPhoto.hover(showMagifier);
  mainSlider.hover(showSliderArrows,hideSliderArrows);
  mainPhoto.click(showFullImage);
// Search buttons
  searchButton.click(hideNavigation);
  closeSearchButton.click(showNavigation);
// Slider arrows
  leftArrow.click(arrowSliderLeft);
  rightArrow.click(arrowSliderRight);
  // Navigation
  mobileNav.click(toggleNavigation);
  mobileNav.click(slideNav);







});
