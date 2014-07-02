var prediction = document.getElementById("prediction");

var predictions = [
    "Часове задачки ще решаваш, че дъжда навънка не минава.",
    "Очаква те радост голяма - поправителен изпит в СофтУни... по Java!",
    "Много ти не се чуди, а домашните си напиши!",
    "Дъжд ще те вали от всякакви бъгни.", "Алгоритми седни научи, инак сайтаджия ще си ти.",
    "В известна фирма ще работиш, но и много ще се поизпотиш.",
    "Късметлийска дата избери - най-лесните задачи ти реши (на изпита).",
    "Цяла нощ ти ще будуваш, но дали ще учиш или ще танцуваш?",
    "С JavaScript ще имаш нужда от късмет! С 2 и 2 ще правиш 5."];

function getRandomElement(predictions) {
    var random = predictions[Math.floor(Math.random()*predictions.length)];
    return random;
}

var random = getRandomElement(predictions).toString();
$('#prediction').html(random);