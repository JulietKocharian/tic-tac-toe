let step = 1;
let bool = true;
$('table tr td').click(function () {
    if ($(this).text() == "" && bool) {
        if (step % 2 == 1) {
            $(this).append('X');
            $(this).css('color', '#FFFF55');
        } else {
            $(this).append('O');
            $(this).css('color', '#085f63');
        }
        step++;
        if (winner() != -1 && winner() != "") {
            if (winner() == "X") {
                $('body').append('<div class="winner"><p>Winner</p>X</div>');
                $('.winner').css('font-size', '40px');
                $('.winner').css('text-align', 'center');
            } else if(winner() == "O"){
                $('body').append('<div class="winner"><p>Winner</p>O</div>');
                $('.winner').css('font-size', '40px');
                $('.winner').css('text-align', 'center');
            } 
            bool = false;
        }
    }
});

$('#resetButton').click(function () {

    $('table tr td').text('');
    $('table tr td').css('color', '');
    $('.winner').remove();
    step = 1;
    bool = true;
});

function winner() {
    let first = $('table tr:nth-child(1) td:nth-child(1)').text();
    let second = $('table tr:nth-child(1) td:nth-child(2)').text();
    let third = $('table tr:nth-child(1) td:nth-child(3)').text();
    let fourth = $('table tr:nth-child(2) td:nth-child(1)').text();
    let fifth = $('table tr:nth-child(2) td:nth-child(2)').text();
    let sixth = $('table tr:nth-child(2) td:nth-child(3)').text();
    let seventh = $('table tr:nth-child(3) td:nth-child(1)').text();
    let eighth = $('table tr:nth-child(3) td:nth-child(2)').text();
    let ninth = $('table tr:nth-child(3) td:nth-child(3)').text();

    if (first == second && second == third) {
        return third;
    }
    else if (fourth == fifth && fifth == sixth) {
        return sixth;
    }
    else if (seventh == eighth && eighth == ninth) {
        return ninth;
    }
    else if (first == fourth && fourth == seventh) {
        return seventh;
    }
    else if (second == fifth && fifth == eighth) {
        return eighth;
    }
    else if (third == sixth && sixth == ninth) {
        return ninth;
    }
    else if (first == fifth && fifth == ninth) {
        return ninth;
    }
    else if (third == fifth && fifth == seventh) {
        return seventh;
    }
    return -1;
}
