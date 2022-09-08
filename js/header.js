
// function openNav() {
//     document.getElementById("mySidenav").style.width = "70%";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// };
// const navbarMenu = document.getElementById("menu");
// const burgerMenu = document.getElementById("burger");
// const headerMenu = document.getElementById("header");

// // Open Close Navbar
// if (burgerMenu && navbarMenu) {
//    burgerMenu.addEventListener("click", () => {
//       burgerMenu.classList.toggle("is-active");
//       navbarMenu.classList.toggle("is-active");
//    });
// }

// // Close Navbar
// document.querySelectorAll(".menu-link").forEach((link) => {
//    link.addEventListener("click", () => {
//       burgerMenu.classList.remove("is-active");
//       navbarMenu.classList.remove("is-active");
//    });
// });

// // Change Header 
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });

// $(document).ready( function () {

//    // Sliders

//    //// Slider Top
//   $('.js-items-slider-container .slider-for').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       asNavFor: '.js-items-slider-container .slider-nav'
//   });
//   $('.js-items-slider-container .slider-nav').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       asNavFor: '.js-items-slider-container .slider-for',
//       dots: true,
//       centerMode: false,
//       focusOnSelect: true,
//       arrows: false,
//       accessibility: true,
//       onAfterChange: function (slide, index) {
//         console.log("slider-nav change");
//         console.log(this.$slides.get(index));
//         $('.current-slide').removeClass('current-slide');
//         $(this.$slides.get(index)).addClass('current-slide');
//       },
//       onInit: function (slick) {
//         $(slick.$slides.get(0)).addClass('current-slide');
//       }
//   });
// });
// $('.slider-single').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: true,
//    fade: false,
//    adaptiveHeight: false,
//    infinite: true,
//   useTransform: true,
//    speed: 400,
//    dots: false,
//    arrows: false,
//    autoplay: true,
//    autoplaySpeed: 2000,
//    customPaging: function(slick,index) {
//       return '<a>'+'</a>';
//    },
//    responsive: [{
       
//            breakpoint: 480,
//            settings: {
//                slidesToShow: 1,
//                dots: true,
//       }
//        }]
// });

// $('.slider-nav')
//    .on('init', function(event, slick) {
//        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
//    })
//    .slick({
//        slidesToShow: 5,
//        slidesToScroll: 1,
//        dots: false,
//        focusOnSelect: false,
//        infinite: false,
//    arrows: false,
//        responsive: [{

//            breakpoint: 992,
//            settings: {
//                slidesToShow: 3,
//                slidesToScroll: 3,
//           }
//        }, {
//            breakpoint: 480,
//            settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1,
//       }
//        }]
//    });

// $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
//    $('.slider-nav').slick('slickGoTo', currentSlide);
//    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
//    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
//    $(currrentNavSlideElem).addClass('is-active');
// });

// $('.slider-nav').on('click', '.slick-slide', function(event) {
//    event.preventDefault();
//    var goToSingleSlide = $(this).data('slick-index');

//    $('.slider-single').slick('slickGoTo', goToSingleSlide);
// });


function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});