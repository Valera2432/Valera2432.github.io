//Start**
add_some_card(6);

function successfully() {
    alert("Удачно!")
}


function add_card() {
    // Всего на 12 колонок.
    // Количество столбцов = 12: col-4 . Т.е. 3
    var card =
        '<div class="col-2">' +
        '   <div class="card fixed_card">' +
        '             <img  class="card-img-top" src="image/dama.jpg" alt="Card image cap">' +
        '   </div>' +
        '</div>';

    $(card).appendTo('#enemy .row');
}

function remove_card() {
    // var card = document.querySelector("");
    $('#enemy .row')[0].lastChild.remove();
}

function remove_all_card(who) {
    // #enemy .row .col-3 - это селекторы
    let table = $('#enemy .row .col-2');
    table.remove();
}

function add_some_card(count) {
    for (i = 0; i < count; i++) {
        add_card();
    }
}

// имя функции change_image();
// CTRL+ALT+L - быстрое форматирование. Приводит к стандарту формата кода.
var face = true;
function change_image(index) {
    // var card_image =  $("#enemy img:eq("+index+")");
    var card_image =  $("#enemy img:lt(4)");

    if (face){
        card_image.attr({src:"image/back.jpg", alt:"рисунок"});
        console.log("Отработала функция");
        face=false;
    }else {
        card_image.attr({src:"image/dama.jpg", alt:"рисунок"});
        console.log("Отработала функция");
        face=true;
    }
}