document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("[data-lang]");

  function changeLanguage(language) {

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

      const text = element.getAttribute("data-" + language);

      if (text) {
        element.innerHTML = text;
      }

    });

    buttons.forEach(function (button) {
      button.classList.remove("active");
    });

    const selected = document.querySelector(
      '[data-lang="' + language + '"]'
    );

    if (selected) {
      selected.classList.add("active");
    }

    localStorage.setItem("preferredLanguage", language);
  }

  buttons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();

      const language = button.getAttribute("data-lang");

      changeLanguage(language);

    });

  });

  const savedLanguage =
    localStorage.getItem("preferredLanguage") || "pt";

  changeLanguage(savedLanguage);

});
