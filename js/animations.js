$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".sign-up-button").click(function () {
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });
});
