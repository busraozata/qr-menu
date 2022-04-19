$('.box-item .content').hide(); //Hide children by default

$('.box-area').children().click(function () {
    $(this).children('.box-item .content').slideToggle('slow');
    $('.fa-chevron-down', this).toggleClass('show-box');

}).children('.box-item .content').click(function (event) {
    event.stopPropagation();
});

/* ----------liste menüsü ile resimli menü arasında toggle işlemi yapılıyor---------- */

const toggleView = document.querySelectorAll('.toggle-view');
const toggleViewGalery = document.querySelectorAll('.toggle-view-galery');

$('.galery-view').hide();
$('.toggle-view-galery').hide();
$(toggleView).click(function () {
    $('.toggle-view').hide();
    $('.list-view').hide();
    $('.galery-view').show();
    $('.toggle-view-galery').css("display", "flex");
});
$(toggleViewGalery).click(function () {
    $('.toggle-view').css("display", "flex");
    $('.list-view').show();
    $('.galery-view').hide();
    $('.toggle-view-galery').hide();
});


var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

