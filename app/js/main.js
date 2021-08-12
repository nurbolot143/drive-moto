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

  active(headerTopLinks);
  active(headerBottomLinks);
  active(searchButtons);
  active(productTabs);
  //

  //slider
  $(".slider").slick({
    prevArrow: '<button class="slider-btn slider-prev"></button>',
    nextArrow: '<button class="slider-btn slider-next"></button>',
    dots: true,
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

  // function Tab(tab, element) {}
});
