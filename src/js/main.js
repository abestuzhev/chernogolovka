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
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: products,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});



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
  $(".js-show-popup").on("click", function(e){
    e.preventDefault();
    $(".product-popup-layout").toggleClass("is-open");
  })

  $(".product-popup-close").on("click", function(e){
    e.preventDefault();
    console.log("hello")
    $(".product-popup-layout").toggleClass("is-open");
  })

  var $html = $('html');
  var $header = $('.header_wrap header');

  function showPopup(icon, popup) {
    $(document).on('click', icon, function (e) {

      e.preventDefault();
      const costType = $(this).attr('data-type');
      const costName = $(this).attr('data-name');
      console.log('type', costType);
      console.log('name', costName);
      if (costType !== '') {

        $(popup).addClass(costType);
        $(popup).find('.popup-title').text(costName)
      }

      $(popup).addClass('is-visible');
      $('.mfp-bg').addClass('is-visible');


      $html.addClass('blocked');
      // $('body').addClass('blocked');

      var widthScroll = windowWidth - documentWidth;
      console.log('widthScroll: ' + widthScroll);
      if (windowWidth > documentWidth) {
        $html.css({
          'margin-right': widthScroll
        });
        $header.css({
          'padding-right': widthScroll
        });
      }
    });
  }

  $(document).on('click', '.js-popup-close', function (e) {
    e.preventDefault();
    $(this).parents('.mfp-wrap').removeClass('is-visible');
    $('.mfp-bg').removeClass('is-visible');
    $html.css({
      'margin-right': '0'
    }).removeClass('blocked');

    $header.css({
      'padding-right': '0'
    });

    var parentModal = $(this).parents('.mfp-wrap');
    if (parentModal.data('save')) {
      onPopupClose(parentModal);
    }
  });

  showPopup(".product-beverage .js-show-popup", '#product-popup');
});



/****************************************************************/
/****************************************************************/
/****************************************************************/

