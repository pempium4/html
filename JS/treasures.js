var height = 500, width = 690;
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

function getRandomNumber(size){
    return Math.floor(Math.random()*size);
};

var clickCount = 0;

function clickCounter(event){
    clickCount++;
    var distance = getDistance(event, target);
    var hint = getHint(distance);
    $("#distance").text(hint);
    if(distance < 8){
        alert("Поздравляю! Вы нашли клад!\nСделано кликов: " + clickCount);
        $("#coords").text("Клад был на координатах: X - " + target.x + " Y - " + target.y);
        clickCount = 0;
    }
    console.log("X: " + target.x + ", Y: " + target.y);
    console.log("X: " + event.pageX + ", Y: " + event.pageY);
 };
$("#map").click(clickCounter);

/*
$("#map").click(function (){
    clickCount++;
    console.log("X: " + target.x + ", Y: " + target.y);
    console.log("X: " + event.pageX + ", Y: " + event.pageY);
});
*/

function getDistance(event, target){
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

function getHint(distance){
    if(distance < 10){
        return "Очень горячо!";
    }else if(distance < 20){
        return "Горячо!";
    }else if(distance < 40){
        return "Тепло!";
    }else if(distance < 80){
        return "Прохладно!";
    }else if(distance < 160){
        return "Холодно!";
    }else{
        return "Очень холодно!";
    }
};
