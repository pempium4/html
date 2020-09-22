/*var array = [];
function arrayCount(){
    for(var i = 0; i<10; i++){
        if(i === 0 || i === 9){
            array[i] = 1;
        }else{
            array[i] = 0;
        }
    }
    console.log(array);
};*/
/*=======================*/
/*var array2 = [];
function arrayCount2(){
    for(var i = 0; i<10; i++){
        if(i%2 === 1){
            array2[i] = 1;
        }else{
            array2[i] = 0;
        }
    }
    console.log(array2);
};*/
/*=======================*/
/*
var array3 = [];
var index = 1;
function arrayCount3(){
    for(var i = 0; i<10; i++){
        array3[i] = index;
        index+=2;
    }
    console.log(array3);
};*/
/*=======================*/
/*var array3 = [];
function arrayCount3(){
    for(var i = 20; i>0; i--){
        if(i%3 === 0){
            array3.push(i);
        }
    }
    console.log(array3);
};*/
/*=======================*/
/*var array3 = [];
function arrayCount3(){
    for (var i = 0; i < 10; i++){
        array3[i] = i*i;
    }
    console.log(array3);
};*/
/*=======================*/
/*var array3 = [];
var sum = 0;
function arrayCount3(){
    for (var i = 0; i < 45; i++){
        if(i%3 === 0 && i%7 !== 0){
        sum++;
            console.log(i);
        }
    }
    console.log(sum);
};*/
/*=======================*/
/*
var array3 = [];
var sum = 0;
function arrayCount3(){
    for (var i = 0; i < 45; i++){
        if(i%2 === 0){
            sum++;
        }
    }
    console.log(sum);
};*/
/*=======================*/
/*var odd = 0;
var even = 0;
function arrayCountNew(numb){
    console.log(numb);
    for (var i = 0; i < numb.length; i++){
        if(numb[i]%2 === 0){
            odd++;
        }else{
            even++;
        }
    }
    console.log(odd + " " + even);
};
arrayCountNew("8945");*/
/*=======================*/
/*var arrayF = [];
var first = 0;
var last = 1;
function fib(num){
    for(var i = 0; i < num; i++){
        arrayF[i]= first + last; //1 2 3 5
        first = last; //1 1 2 3
        last = arrayF[i]; //1 2 3 5
        console.log(arrayF[i]);
    }
};

fib(10);*/

/*
var arrayF = [];
function fib(num){
    for(var i = 0; i < num; i++){
        if(i === 0 || i === 1){
            arrayF[i] = 1;
        }else{
            arrayF[i] = arrayF[i-1] + arrayF[i - 2];
        }
        console.log(arrayF[i]);
    }
};

fib(13);

console.log("Step");

function step(min, max, step){
    for(var i = min; i < max; i += step){
        console.log(i);
    }
}

step(12, 67, 8);

console.log("Func");

function func(min, max, step){
    for(var i = min; i <= max; i += step){
        var y = -0.23 * Math.pow(i, 2) + i;
        console.log("X = " + i + " Y = " + y);
    }
}

func(1, 3, 0.5);*/

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

/*===== reverse =====*/
/*function task(){
    var str = prompt("Введите число");
    var numb = str.split("");

    console.log(numb);

    var array = [];
    for (var i = 0; i < numb.length; i++){
        array.unshift(numb[i]);
    }
    console.log(array);
};*/

/*function reverse(num){
    var numArray = "";
    for (var i = num.length - 1; i >= 0 ; i--){
        numArray+=num[i];
    }
    return numArray;
}
var str = reverse("7563");
console.log(str);*/
/*===== reverse =====*/

/*===== factorial =====*/
/*function fact(num){
    if (num){
        return num * fact(num - 1);
    }else{
        return 1;
    }
};
console.log(fact(7));*/
/*===== factorial =====*/

/*===== sum & multiple =====*/
/*function op(num){
    var result = [0, 1];
    for (var i = 0; i < num.length; i++){
        result[0]+=+num[i];
        result[1]*=+num[i];
    }
    return result;
}
var str = op("1111");
console.log(str);*/
/*===== sum & multiple =====*/
$(function (){

});
/*===== sqrt equation =====*/
function sqrtFunc(a, b, c){
    if (a === 0){
        return "Ошибка, а ≠ 0";
    }
    var D = Math.pow(b, 2) - 4 * a * c;
    var x1, x2;
    if (D < 0){
        return [D];
    }else if(D > 0){
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [D, x1, x2];
    }else{
        x1 = -b / 2 * a;
        return [D, x1];
    }
};

function result(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var res = sqrtFunc(a, b, c);
    var D = "Дискриминант = " + res[0];
    var x;
    if(res[2]){
        x = "Корни уравнения: \nx1 = " + res[1].toFixed(2) + "\nx2 = " + res[2].toFixed(2);
    }else if (res[1]){
        x = "Корень уравнения: \nx1 = x2 = " + res[1].toFixed(2);
    }else{
        x = "Корней нет"
    }
    document.getElementById("D").textContent = D;
    document.getElementById("roots").textContent = x;
};
/*===== sqrt equation =====*/

function showRes(state){
    document.getElementById("res").style.display = state;
};

/*
var res = sqrtFunc(1, -2, -3);
console.log(res);*/
