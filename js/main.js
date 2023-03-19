var $target = $('.body-container');
var $nav = $('.main-nav');

$(document).on('scroll', function() {
    $nav.toggleClass('scrolled', $(this).scrollTop() >= $target.position().top);
})

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}