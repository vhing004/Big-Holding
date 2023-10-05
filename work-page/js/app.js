$(document).ready(function () {
  $(".content-slide").slick({
    slidesToShow: 2,
    slideToScroll: 1,
    infinite: false,
    speed: 300,
    prevArrow:
      "<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i><span>Trang trước</span></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right arrow'><span>Trang sau</span><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          speed: 100,
          centerMode: true,
          centerPadding: "50px",
          prevArrow:
            "<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
          nextArrow:
            "<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          speed: 100,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          speed: 300,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          arrows: false
        },
      },
    ],
  });
});
