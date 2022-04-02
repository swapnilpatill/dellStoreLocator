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
  if ($("body").width() < 1024) {
    var swiper = new Swiper(".slWrapper", {
      slidesPerView: "auto",
      spaceBetween: 15,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    });
    var swiper = new Swiper(".newProduct", {
      slidesPerView: "auto",
      spaceBetween: 15,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    });
    var swiper = new Swiper(".googleReviewSlide", {
      slidesPerView: "auto",
      spaceBetween: 15,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    });
    var swiper = new Swiper(".storePhotosMobile", {
      slidesPerView: "auto",
      spaceBetween: 15,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    });
    var swiper = new Swiper(".popularCityslider", {
      slidesPerView: "auto",
      spaceBetween: 5,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    });
  }
});
