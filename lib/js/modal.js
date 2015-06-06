$(document).ready(function() {
    /************************************************************************************
     Modall
     *************************************************************************************/
    var blocked = false;

    //закриття модального вікна при кліку на modal_bg
    $('.modal_bg').click(function (event) {
        if (!blocked) {
            e = event || window.event;
            if (e.target == this) {
                $(this)
                    .find('.modal_window')
                    .removeClass('visible')
                    .css('position', 'absolute')
                    .parent()
                    .removeClass('visible');
                $('body').css({
                    'overflow': 'auto',
                    'margin-right': 0
                });
            }
        }
    });

    //закриття модального вікна кл. "ESC"
    $('body').keydown(function (e) {
        if ((e.which == 27) || (e.keyCode == 27)) {
            $('.modal_window')
                .removeClass('visible')
                .css('position', 'absolute');
            $('.modal_bg').removeClass('visible');
        }
    });

    $('.modal_window .ok').click(function () {
        var _this = $(this);
        blocked = false;
        closeModalOk(_this);
    });

    $('.modal_window .js-mod_close').click(function () {
        var _this = $(this);
        closeModal(_this);
    });

//центруємо вікна при завантаженні сторінки
//$('.modal_window').each(function (i, elem) {
//	fn_modal_center(elem);
//});

//виклик модального вікна
    $('.js-mod').click(function (e) {
        e.preventDefault();

        var _this = $(this);
        fn_openModal(_this);
    });


});



//вирівнювання модального вікна по вертикалі
function fn_modal_center(elem) {
    var win_h = $('.modal_bg').height();
    var elem_h = $(elem).height();

    if (win_h < elem_h) {
        $(elem).css('position','relative');
    }
}

function fn_openModal(elem) {
    var class_list =$(elem).attr('class').split(/\s+/);

    for (var i = 0; i < class_list.length; i++) {
        var reg_search = class_list[i].search(/js-mod_\w+/),
            reg_match = class_list[i].match(/js-mod_\w+/);
        if ( !reg_search ) {
            var name_window = String(reg_match).split('_');
            var el = 'mod_' + name_window[1];

            fn_openModalId(el);
        }
    }
}

function fn_openModalId(name_modalId) {
    var el = '#' + name_modalId;

    fn_modal_center(el);
    //$('body').css({
    //    'overflow': 'hidden',
    //    'margin-right' : '17px'
    //});

    $(el).parent().addClass('visible');
    $(el).addClass('visible');

    if ( $(el).hasClass('is-blocked') ) {
        blocked = true;
    }
}

function fn_closeModalId(name_modalId) {
    var el = '#' + name_modalId;

    $(el)
        .removeClass('visible')
        .css('position','absolute');

    $(el).parent().removeClass('visible');

    $('body').css({
        'overflow': 'auto',
        'margin-right': 0
    });
}

function closeModal(_this) {
    _this.parent().removeClass('visible');
    _this.parent().parent().removeClass('visible');
    _this.parent().css('position','absolute');

    $('body').css({
        'overflow': 'auto',
        'margin-right': 0
    });

}

function closeModalOk(_this) {
    _this.parent().parent().removeClass('visible');
    _this.parent().parent().parent().removeClass('visible');
    _this.parent().parent().css('position', 'absolute');
    $('body').css({
        'overflow': 'auto',
        'margin-right': 0
    });
}