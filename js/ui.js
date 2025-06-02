$(document).ready(function(){

    $('.show-review').click(function () {
        $('body').addClass('overlayed');
    });

    $('.burger').click(function () {
        $('body').addClass('navigated');
    });

    $('.call-us').click(function () {
        $('body').addClass('sheeted');
    });

    $('.close-popup').click(function () {
        $('body').removeClass();
    });

    $('.expand-accrd').click(function () {
        $(this).parents('.accrd-item').addClass('expanded');
    });
    $('.close-accrd').click(function () {
        $(this).parents('.accrd-item').removeClass('expanded');
    });


    $('.grid-item .show-more').click(function () {
        $(this).parents('.grid-item').toggleClass('expanded');
        $(this).toggleClass('hide-more');
    });

    $('.navigation-level .navigation-item').click(function () {
        $('.navigation-level').addClass('hidden');
        $('.navigation-level-01').removeClass('hidden');
    });
    $('.navigation-level-01 .back-level').click(function () {
        $('.navigation-level-01').addClass('hidden');
        $('.navigation-level').removeClass('hidden');
    });

    $('.navigation-level-01 .navigation-item').click(function () {
        $('.navigation-level-01').addClass('hidden');
        $('.navigation-level-02').removeClass('hidden');
    });
    $('.navigation-level-02 .back-level').click(function () {
        $('.navigation-level-02').addClass('hidden');
        $('.navigation-level-01').removeClass('hidden');
    });
});
