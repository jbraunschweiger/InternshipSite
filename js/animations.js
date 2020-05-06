$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".modal-button").click(function () {
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });
});
