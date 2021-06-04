$(document).ready(function () {
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
      },
    });
  });

  //phone field format validation
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });

  //Swiper
  const swiper = new Swiper(".swiper-container", {
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
});
