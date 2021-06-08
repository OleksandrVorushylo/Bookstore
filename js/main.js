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
          nextEl: ".genres-swiper__button-next",
          prevEl: ".genres-swiper__button-prev",
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