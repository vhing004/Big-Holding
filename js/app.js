$(document).ready(function () {
  $(".hero-container").slick({
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".intro-content").slick({
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left1 arrow1'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right1 arrow1'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  });
});
// $(document).ready(function () {
//   $(" .news-list").slick({
//     slidesToShow: 3,
//     slideToScroll: 1,
//     speed: 300,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     prevArrow:
//       "<button type='button' class='slick-prev pull-lefts arrows'><i class='fa-solid fa-angle-left'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-rights arrows'><i class='fa-solid fa-angle-right'></i></button>",
//     // dots: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           prevArrow: false,
//           nextArrow: false,
//           // centerMode: true,
//           // centerPadding: "100px",
//         },
//       },
//       // {
//       //   breakpoint: 480,
//       //   settings: {
//       //     slidesToShow: 1,
//       //     slidesToScroll: 1,
//       //   },
//       // },
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   });
// });
// $(document).ready(function () {
//   $(" .project-main").slick({
//     slidesToShow: 1,
//     slideToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     prevArrow:
//       "<button type='button' class='slick-prev pull-lefts arrows'><i class='fa-solid fa-angle-left'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-rights arrows'><i class='fa-solid fa-angle-right'></i></button>",
//     // dots: true,
//   });
// });

// $(document).ready(function () {
//     $(".project-inner").slick({
//       slidesToShow: 1,
//       slideToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       prevArrow:
//         "<button type='button' class='slick-prev pull-leftss arrowss'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
//       nextArrow:
//         "<button type='button' class='slick-next pull-rightss arrowss'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
//       dots: true,
//     });
//   });
