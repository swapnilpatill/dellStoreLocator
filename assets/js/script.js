$(document).ready(function () {
  $(".faqAccordion > li > .answer").hide();
  $(".faqAccordion > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".faqAccordion > li.active .answer").slideUp();
      $(".faqAccordion > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  $(".faqAccordion > li .answer").click(function (e) {
    e.stopPropagation();
  });
  $(".pgListToggle > li").click(function () {
    if ($(this).hasClass("active")) {
    } else {
      var target = $(this).attr("data-href");
      $(".pgListToggle li").removeClass("active");
      $(this).addClass("active");
      console.log("target" + target);
      $(".pgItem").hide();
      $(target).fadeIn();
    }
    return false;
  });
  $(".navbar-toggle").click(function () {
    $("html, body").toggleClass("scrollHide");
    $(this).toggleClass("active");
    $(".navbar").toggleClass("showNavbar");
    $(".menuOverly").toggleClass("active");
  });
  $(".plList").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          dots: true,
        },
      },
    ],
  });
  $(".reviewSlider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: "false",
  });
  $(".grList").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: true,
        },
      },
    ],
  });
  if ($("body").width() < 701) {
    $(".poInnerBox").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,

            dots: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            dots: true,
          },
        },
      ],
    });
  }
  if ($("body").width() < 768) {
    $(".storePhotosMobile").slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            dots: true,
          },
        },
      ],
    });
  }
  if ($("body").width() < 1025) {
    $(".slListing").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,

            dots: true,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

            dots: true,
          },
        },
      ],
    });
  }
});
