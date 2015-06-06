$(document).ready(function() {

    /************************************************************************************
     *************************************************************************************/
    $('.js-anchor').click(function (event) {
        var id = $(this).attr('href');
        var elem = $(id).offset().top;

        $('nav a').removeClass('is-active');
        $(this).addClass('is-active');

        $('html,body').animate({scrollTop: elem}, 600);
        event.preventDefault();
        return false;
    });




    $.ajax({
        type: 'POST',
        url: 'sendmessage.php',
        data: $(this).serialize(),
        success: function(data) {
            if(data == "true") {
                _this.val('Заявка отправлена​​!');
                fn_btn_val(_this);
            }
        }
    });




    var $descr = $('.description');
    var descrH = $descr.height();
    var descrPosTop = $descr.offset().top;
    var winH = $(window).height();

    $descr.height(0);

    $(document).scroll(function(){
        descrHeight();
    });

    var descrHeight = function() {
        var scrollTop = $(document).scrollTop();

        if (winH + scrollTop > descrPosTop) {
            if (scrollTop * 0.5 + 15 < descrH) {
                $descr.height(scrollTop * 0.5 + 15);
            }
            else {
                $descr.height(descrH);
            }
        }
    };



    var $spaceStep= $('.about__step');
    var $spaceStepW = $spaceStep.width();
    var $raket = $('.js-roket');
    var $raketW = $raket.width();
    var $raketH = $raket.height();
    var $raketTop = $raket.offset().top;

    var posCenter = $spaceStepW / 2;

    $raket.css({
        'top': 0,
        'margin-left': $spaceStepW / 2 - ($raketW / 2)
    });


    //$(document).scroll(function(){
    //    var scrollTop = $(document).scrollTop();
    //    console.log($raketTop + " " + (scrollTop + winH - $raketH - 50));
    //    if ($raketTop < scrollTop + winH - $raketH - 50) {
    //        $raket.css({
    //            'top': scrollTop - $raketTop
    //        })
    //    }
    //});

    var space = [
        [posCenter, 25],
        [posCenter, 110],
        [posCenter + 120, 60],
        //[posCenter + 90, 102],
        [posCenter + 150, 92],
        [posCenter + 160, 212],
        [posCenter + 160, 250],
        [posCenter + 160, 273],
        [posCenter + 102, 332],
        [posCenter - 92, 275],
        [posCenter - 180, 302],
        [posCenter - 180, 330],
        [posCenter - 185, 475],
        //2 circle
        [posCenter - 72, 510],
        [posCenter - 102, 478],
        [posCenter + 160, 529],
        //3 circle
        [posCenter + 160, 685],
        [posCenter + 160, 735],
        [posCenter, 745],
        [posCenter, 800],
        [posCenter, 850]
    ];


    //$spaceStep.waypoints({
    //    item: '.js-roket',
    //    angel: 0,
    //    position: [$spaceStepW / 2,40],
    //    waypoint: 0,
    //    pathThreshold: 40,
    //    //maxForce: 0.15,
    //    //maxforce: 1,
    //    waypoints: space
    //});


    var slideCount = $('.slider__item').length;
    var slideWidth = $('.slider__item').width();
    var sliderCont = $('.slider__container');
    var slideNum = 0;

    sliderCont.width(slideCount / 2 * slideWidth);

    $('.js-prevSlide').click(function(){
        if (slideNum != 0) {
            slideNum--;
            slide(slideNum);
        }
    });
    $('.js-nextSlide').click(function(){
        if (slideNum < slideCount / 4 - 1) {
            slideNum++;
            slide(slideNum);
        }
    });

    function slide(slideNum) {
        sliderCont.animate({'left': -slideNum * slideWidth});
    }

});
