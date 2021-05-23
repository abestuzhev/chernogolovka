/****************************/
// const headerMenuBtn = document.querySelector('.header-menu');
// const menuMobile = document.querySelector('.menu-mobile');
//
// headerMenuBtn.addEventListener('click', function () {
//   this.classList.toggle("active");
//   menuMobile.classList.toggle("is-show");
// });
/****************************/

const shopssSlider = new Swiper('.shops-list', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const shopsPopupSlider = new Swiper('.product-popup-shops', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

const products = new Swiper(".beverages-card-products", {
  // loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const slider = new Swiper(".js-beverages-slider", {
  loop: true,
  spaceBetween: 10,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: products,
  },
});

// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });



document.addEventListener('click', function (event) {

  if (event.target.dataset.show === 'consultation') {
    event.preventDefault()
    console.log('consultation');
  }
});


const windowWidth = (window.innerWidth); // вся ширина окна
const documentWidth = (document.documentElement.clientWidth); // ширина минус прокрутка
//
//
// window.onscroll = function() {stickyHeader()};
//
// const header = document.querySelector(".section-header");
//
// const sticky = header.offsetTop;
//
// function stickyHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$(function(){
  $(".product-beverage-list__link").on("click", function(e){
    e.preventDefault();
    $(".product-popup-layout").toggleClass("is-open");
  })

  $(".product-popup-close").on("click", function(e){
    e.preventDefault();
    console.log("hello")
    $(".product-popup-layout").toggleClass("is-open");
  })
});


/****************************************************************/
/****************************************************************/
/****************************************************************/

