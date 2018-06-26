// вытянутое количество очков с карты
let drag_points = 0;
// var drag_points = 0;

//инициируем функции при запуске
// init = inithialization
$(document).ready(init);

// начальная функция
function init() {

    $('.hero > .pick_card').bind('click', function () {
        pick_card('.hero');
    });
    $('.enemy > .pick_card').bind('click', function () {
        pick_card('.enemy');
    });

    $('.reload').bind('click', function () {
        reset_value();
    });
}


// тянем карту
function pick_card(sel) {
    drag_points = get_random_int(1, 11);

    $(sel + ' .drag_points ').text(drag_points);
    let e_points = $(sel + ' .points');
    e_points.text(+e_points.text() + +drag_points);
    points_21(sel);
}

// получаем случайное значение карты
function get_random_int(min, max) {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
}

//сбрасыват значение
function reset_value() {

    $('div label').text(0);

    $(' .pick_card').prop("disabled", "enabled");

    for (let i = 0; i < 1000; i++) {
        // console.log(i*i); // 0*0 1*1 2*2 3*3 4*4

    }
}


// проверяем количество очков >21
function points_21(sel) {
    let result_content = "";
    let e_points = $(sel + ' .points'); // sel== .enemy; $('.enemy .points');
    if (e_points.text() === ('21')) {
        result_content = "Очко!";
        $(sel + ' .pick_card').prop("disabled", "disabled");
    } else if (e_points.text() > 21) {
        result_content = "Много!";
        $(sel + ' .pick_card').prop("disabled", "disabled");
        $(sel + ' .result').text(result_content).removeClass("text-success").addClass("text-danger");
        return;
    }
    $(sel + ' .result').text(result_content)
}