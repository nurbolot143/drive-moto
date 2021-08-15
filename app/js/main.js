$(function () {
  //add active class
  function active(element) {
    element.forEach((link) => {
      link.addEventListener("click", () => {
        removeActiveClasses();
        link.classList.add("active");
      });
    });

    function removeActiveClasses() {
      element.forEach((link) => {
        link.classList.remove("active");
      });
    }
  }

  const headerBottomLinks = document.querySelectorAll(".header-menu-link");
  const headerTopLinks = document.querySelectorAll(".navbar-link");
  const searchButtons = document.querySelectorAll(".search-btn");
  const productTabs = document.querySelectorAll(".product-tab");
  const sortViewTabs = document.querySelectorAll(".catalog-sort-view");
  const catalogActiveTab = document.querySelectorAll(".catalog-tabs-tab-link");

  active(headerTopLinks);
  active(headerBottomLinks);
  active(searchButtons);
  active(productTabs);
  active(sortViewTabs);
  active(catalogActiveTab);
  //

  //slider
  $(".slider").slick({
    prevArrow: '<button class="slider-btn slider-prev"></button>',
    nextArrow: '<button class="slider-btn slider-next"></button>',
    dots: true,
  });
  //

  //tabs
  const tabs = $(".tabs__tab");

  tabs.on("click", function (e) {
    e.preventDefault();

    $($(this).parent().siblings().find("div")).removeClass("active");

    const target = $($(this).attr("href"));

    target.addClass("active");

    if (target.find("div.slick-slider").hasClass("slick-initialized")) {
      target.find(".products-slider").slick("refresh");
    }
  });

  //
  //search tab
  $(".search-btn").click(function (e) {
    e.preventDefault();

    $(".search-form").removeClass("show");
    $($(this).attr("href")).addClass("show");
  });
  //

  //product like toggle
  $(".product-like").click(function () {
    $(this).toggleClass("show");
  });
  //

  //product slider
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <button class="product-btn product-prev"></button>',
    nextArrow: '<button class="product-btn product-next"></button>',
  });
  //

  //tabs
  $(".product-tab").on("click", function (e) {
    e.preventDefault();

    $(".product-tab-wrapper").removeClass("active-tab");
    $($(this).attr("href")).addClass("active-tab");
  });
  //

  // catalog filter
  $(".filter-style").styler();
  //

  //catalog filter drop
  $(".catalog-filter-drop").on("click", function () {
    $(this).toggleClass("catalog-filter-drop-active");
    $(this).next().slideToggle("fast");
  });
  //

  //range slider
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 100000,
    max: 500000,
    from: 150000,
    to: 300000,
    hide_from_to: true,
  });
  //
});
