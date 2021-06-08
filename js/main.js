$(document).ready(function () {
  var tabsItem = $(".hero-right__card");
  var contentItem = $(".hero-left");
  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("hero-right__card--active");
    contentItem.removeClass("hero-left--active");
    $(activeContent).addClass("hero-left--active");
    $(this).addClass("hero-right__card--active");
  });

  var modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    //document.addEventListener("keydown", escapeHandler);
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).on("keydown", function (event) {
    if (event.keyCode == 27) {
      closeModal(event); // Do Something
    }
  });

  var modalOverlay = $(".modal__overlay");
  modalOverlay.on("click", closeModal);

  //bookmark colorization
  var bookmarks = document.querySelectorAll(".bookmark");
  bookmarks.forEach(function (entry) {
    entry.addEventListener("click", function (event) {
      event.target.classList.toggle("bookmarked");
    });
  });

  //burger menu
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
    $("#body").toggleClass("oh");
  });
  var burgerClose = $(".mobmenubtn");
  burgerClose.on("click", function () {
    $(".navbar-menu").removeClass("navbar-menu--visible");
    $("#body").removeClass("oh");
  });

  //comment spoiler
  /* var commentButton = document.querySelector(".commentation-more");
  var comment = document.querySelectorAll(".commentation-block"); */

  //form validation
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста укажите Ваше имя",
          minlength: "Имя должно содержать как минимум 2 символа",
        },
        email: {
          required: "Пожалуйста введите Ваш email",
          email: "Email должен быть в формате name@domain.com",
        },
        phone: {
          required: "Пожалуйста введите Ваш номер телефона",
          minlength: "Введите номер в формате +7 (000) 000-00-00",
        },
        comment: {
          minlength: "Минимальная длина комментария 100 знаков.",
        },
      },
    });
  });

  //phone field format validation
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });

  //Swiper
  const swiperIndex = new Swiper(".slides-slider", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
  });

  const gallerySlider = new Swiper(".gallery-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".gallery-slider__button--next",
      prevEl: ".gallery-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
