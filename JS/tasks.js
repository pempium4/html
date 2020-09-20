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
    }
    alert("Вы не угадали число: " + numb);
};

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
