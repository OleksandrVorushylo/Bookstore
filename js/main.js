// $(document).ready(function () {
//   $('.genres-swiper').slick({
//     infinite: true,
//     adaptiveHeight:true,
//     slidesToShow:3,
//     variableWidth:true,
//     // rows:2,
//     // slidesPerRow:1,
//     responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         rows:2,
//         slidesPerRow:2,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
//   });
// });





var genresSwiper = new Swiper(".genres-container", {
        slidesPerView: 4,
        spaceBetween: 26,
        slidesPerColumn: 1,
        // slidesPerColumnFill: row,
        navigation: {
          nextEl: ".genres-bottom__button-next",
          prevEl: ".genres-bottom__button-prev",
        },
        breakpoints: {
    // when window width is >= 320px
    240: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerColumn: 1,
      slidesPerGroup: 2,
      allowTouchMove: false
    },
    // when window width is >= 480px
    577: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4
    }
  }
      });
var unreleasedSwiper = new Swiper(".unreleased-container", {
        slidesPerView: 4,
        spaceBetween: 28,
        slidesPerColumn: 1,
        // slidesPerColumnFill: row,
        navigation: {
          nextEl: ".unreleased-wrapper__next",
          prevEl: ".unreleased-wrapper__prev",
        },
        breakpoints: {
    // when window width is >= 320px
    240: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    577: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 52
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 5
    }
  }
      });

$(".recommendations-info__fovorites").click(function(e) {
  e.preventDefault();
  $(".recommendations-info__fovorites").removeClass('recommendations-info__fovorites-save');
  $(this).addClass('recommendations-info__fovorites-save');
})
$(".story-wrapper__favorites").click(function(e) {
  e.preventDefault();
  $(".story-wrapper__favorites").removeClass('story-wrapper__favorites-save');
  $(this).addClass('story-wrapper__favorites-save');
})
var player;
$('.story-wrapper__play--top').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '100%',
          videoId: '5kq-PzyUlMs',
          events: {
            'onReady': videoPlay,
          }
        });
      })

      function videoPlay(event) {
        event.target.playVideo();
      }

// var favorites = document.getElement(".recommendations-info__fovorites");
// favorites.addEventListener("click", function() {
//   this.classList.add("recommendations-info__fovorites-save");
// });

var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', function () {
  document
  .querySelector(".navbar-menu")
  .classList.toggle('navbar-menu--visible');
});

var modalButton = $(".navbar-menu__button");
var closeModelButton = $(".close-modal");
  modalButton.on('click', openModal);
  closeModelButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).keydown(function(eventObject) {
    if (eventObject.keyCode === 27) {
    eventObject.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
 });

$('.modal__form').validate({
   errorClass: "invalid",
   messages: {
    name: {
      required: "Пожалуйста, введите ваше имя",
      minlength: "Имя должно содержать, как минимум, 2 символа"
    },
    email: {
      required: "Пожалуйста, введите электронную почту",
      email: "Формат электронной почты: name@domain.com"
    },
    phone: { 
      required: "Пожалуйста, введите ваш номер",
      phone: "Формат номера: +7 (999) 999-99-99",
      minlength: "Пожалуйста, введите 11 символов."
    },
  },
 })
 $('.subscribe-form').validate({
   errorClass: "subscribe-invalid",
   messages: {
    email: {
      required: "Введите электронную почту",
      email: "Формат: name@domain.com"
    },
  },
 })

 $('[type=tel]').mask('+7 (000) 000-00-00');

 AOS.init();