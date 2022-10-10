var swiper = new Swiper(".mySwiper", {});

$(".box-item .content").hide(); //Hide children by default

$(".box-area")
  .children()
  .click(function () {
    $(this).children(".box-item .content").slideToggle("slow");
    $(".fa-chevron-down", this).toggleClass("show-box");
  })
  .children(".box-item .content")
  .click(function (event) {
    event.stopPropagation();
  });

/* ----------liste menüsü ile resimli menü arasında toggle işlemi yapılıyor---------- */

const toggleView = document.querySelectorAll(".toggle-view");
const toggleViewGalery = document.querySelectorAll(".toggle-view-galery");

$(".galery-view").hide();
$(".toggle-view-galery").hide();
$(toggleView).click(function () {
  $(".toggle-view").hide();
  $(".list-view").hide();
  $(".galery-view").show();
  $(".toggle-view-galery").css("display", "flex");
});
$(toggleViewGalery).click(function () {
  $(".toggle-view").css("display", "flex");
  $(".list-view").show();
  $(".galery-view").hide();
  $(".toggle-view-galery").hide();
});

var btn = $("#back-to-top");

/* $(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
 */
/* btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});

let mainNavLinks = document.querySelectorAll(".menu-list-area a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
 */

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu-list-area a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".menu-list-area a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
