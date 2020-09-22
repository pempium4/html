/*
var name = prompt("Привет! Как Вас зовут?");
console.log("Привет " + name);
var opinion = confirm("Тебя зовут Дима?");
if(opinion){
    console.log("Всё в порядке.")
} else{
    console.log("Выйди отсюда!")
};
alert("Хватит на сегодня!");*/

function game() {
    var words = ["ПРОГРАММА", "ЁЖИК", "БАНАН", "ЦИВИЛИЗАЦИЯ", "МАКРОМЕДИА"];
    var word = words[Math.floor(Math.random()*words.length)];
    var answer = [];
    for(var i =0; i < word.length; i++){
        answer[i] = "_";
    }
    var letters = word.length;

    while (letters > 0) {
        var letter = prompt("Угадай букву (напиши в верхнем регистре) или Заверши игру нажав 'Отмена'");
        if (letter === false) {
            break;
        } else if (letter.length > 1) {
            alert("Введите лишь ОДНУ букву!")
        } else {
            for (var j = 0; j < word.length; j++) {
                if (answer[j] === letter) {
                    alert("Эта буква уже угадана! Введите другую");
                    break;
                } else if (word[j] === letter) {
                    answer[j] = letter;
                    letters--;
                }
            }
        }
        alert(answer.join(" "));
    }
    alert("Отлично! Вы отгадали слово " + word);
};

function task(){
    var numb = Math.floor(Math.random()*100);
    for(var i = 0; i < 10; i++){
        var guessNumbPrompt = prompt("Угадай загаданное число");
        if (guessNumbPrompt){
            var guessNumb = parseInt(guessNumbPrompt); // другой вариант конвертации +guessNumbPrompt
            if(guessNumb !== numb){
                if(guessNumb > numb){
                    alert("Ваше число больше загаданного!");
                }else{
                    alert("Ваше число меньше загаданного!");
                }
            }else{
                alert("Поздравляю! Вы угадали число: " + numb);
                return;
            }
        }else{
            return;
        }

    }
    alert("Вы не угадали число: " + numb);
};