function changeContent(evt, contentName) {
  var i, manipulatedcontent, tabcontent;

  // Get all elements with class="manipulated-content" and hide them
  manipulatedcontent = document.getElementsByClassName("manipulated-content");
  for (i = 0; i < manipulatedcontent.length; i++) {
    manipulatedcontent[i].style.display = "none";
  }

  // Get all elements with class="tabcontent" and remove the class "active"
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    tabcontent[i].className = tabcontent[i].className.replace(
      " selected-active",
      ""
    );
    $(tabcontent[i]).children("h1").removeClass("has-text-white");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.className += " selected-active";
  $(evt.currentTarget).children("h1").addClass("has-text-white");
}

// Navbar drop down JQuery
$(document).ready(function() {
  // Tab manipulation
  document.getElementById("defaultOpen").click();

  // Navbar drop down
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Switch the timeline if mobile
  $(window).resize(function() {
    timeLineResponsive();
  });
  timeLineResponsive();
});

// Main screen typing out effect
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #f7f7f7 }";
  document.body.appendChild(css);
};


var timeLineResponsive = function() {
  var ww = document.body.clientWidth;
  if (ww > 1200) {
    $('.timeline').removeClass('is-rtl');
    $('.timeline').addClass('is-centered');
  } else if (ww <= 1200) {
    $('.timeline').addClass('is-rtl');
    $('.timeline').removeClass('is-centered');
  };
};