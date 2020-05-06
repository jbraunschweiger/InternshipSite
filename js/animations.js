$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $("div.signup-button").click(function () {
    console.log("modal");
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });

  $("button.close-modal").click(function () {
    console.log("modal");
    $(".modal").toggleClass("is-active");
    $(".modal").toggleClass("is-clipped");
  });
});
