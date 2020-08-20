$(window).on("load", function () {
  $(".famyly-photo").masonry({
    itemSelector: ".famyly-photo__item",
  });
});

$(".reviews__slides").slick();

(function () {
  const burger = document.querySelector(".header__toggle");
  burger.addEventListener("click", () => {
    burger.classList.toggle("header__toggle-active");
  });
})();

$(".header__toggle").click(function (e) {
  e.preventDefault();
  $(".menu-list").toggleClass("menu-list__show");
  $(".body").toggleClass("body__lock");
});
