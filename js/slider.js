// when document is fully loaded
$(document).ready(function () {
  $(".library-slider").slick({
    dots: false,
    infinite: true,
    loop: true,
    speed: 300,
    centerPadding: "30px",
    spaceBetween: 30,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      $('.prev'),
    nextArrow:
      $('.next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.team-slider').slick({
    dots: false,
    speed: 700,
    infinite: true,
    centerPadding: "30px",
    spaceBetween: 30,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev-team'),
    nextArrow: $('.next-team'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".testimonial-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    loop: true,
    speed: 300,
    spaceBetween: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

    
    
    