$(document).ready(function () {
    var $winHeight = window.innerHeight;

    $('.responsive-block').attr('style', 'min-height: ' + $winHeight + 'px;');

    $(window).on('resize', function () {
        $winHeight = window.innerHeight;
        $('.responsive-block').attr('style', 'min-height: ' + $winHeight + 'px;');
    });

    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
//        var href = $.attr(this, 'href');
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

    var tempScrollTop = 0;
    var currentScrollTop = 0;
    var tempScrollTopTime = 0;
    var currentScrollTopTime = 0;

    var way = 0; // направление

    var current = '#home';

    $(window).scroll(function(event)
    {

        currentScrollTop = $(window).scrollTop();
        currentScrollTopTime = event.timeStamp;

        if (tempScrollTop < currentScrollTop)
        {
            way = 1; // крутнули вниз колесо
        }
        else if (tempScrollTop > currentScrollTop)
        {
            way= -1; // крутнули вверх колесо
        }

        tempScrollTop = currentScrollTop ;

        if (currentScrollTopTime - tempScrollTopTime > 100) {
            if (way === 1) {
                var next = $('a[href="'+current+'"').parent().next().find('a').attr('href');
                console.log(next);
                current = next;
                $page.animate({
                    scrollTop: $(next).offset().top
                }, 700);
            }
            if (way === -1) {
                var prev = $('a[href="'+current+'"').parent().prev().find('a').attr('href');
                current = prev;
                $page.animate({
                    scrollTop: $(prev).offset().top
                }, 700);
            }
        };

        tempScrollTopTime = currentScrollTopTime;

    });

});