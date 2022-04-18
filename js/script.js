$('.box-item .content').hide(); //Hide children by default

$('.box-area').children().click(function () {
    $(this).children('.box-item .content').slideToggle('slow');
    $('.fa-chevron-down', this).toggleClass('show-box');

}).children('.box-item .content').click(function (event) {
    event.stopPropagation();
});


/* const toggleView = document.querySelectorAll('.toggle-view');
 */
/* menuToggle.onclick = function () {
    if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
       
    }
} */