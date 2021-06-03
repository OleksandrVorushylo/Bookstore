var genresSwiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 26,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".genres-swiper__button",
        },
      });