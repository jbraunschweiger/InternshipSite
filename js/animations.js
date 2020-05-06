$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $("#signup-button").click(function () {
    console.log("modal");
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });

  $("#exit-modal").click(function () {
    console.log("modal");
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });
});
