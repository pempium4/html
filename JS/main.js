/*var array = ["Hello", "Thanks", "Bye"];
console.log(array[0].slice(0, 4)+array[2].slice(1,2));

array.push("Hi again"); //pop
console.log(array);

array.shift(); //unshift
console.log(array);

var arrayNew = ["Yeah", "Well done", "No way"];

var arrayConcat = array.concat(arrayNew);
console.log(arrayConcat.join(" | "));

console.log("Index = " + (array.concat(arrayNew)).indexOf("Yeah"));

for(var i=0; i<10; i++){
    console.log(arrayConcat[Math.floor(Math.random()*arrayConcat.length)]);
}*/


/*var myFriends = [
    {
        name: "Oleg",
        iq: 100,
        toxic: true
    },
    {
        name: "Maxim",
        iq: 120,
        toxic: false
    },
    {
        name: "Katya",
        iq: 150,
    }
];
myFriends[2].toxic = false;

console.log(myFriends[1].name + ". His iq equals " + myFriends[2]["iq"]);*/

/*==== HomeWork ===*/
/*var obj = {
    name: "Nelep",
    array: [7, 9, {purpose: "putan", number: 123}, 3.3],
    animal: "Shark"
};
console.log(obj.array[2].number); // or console.log(obj["array"][2]["number"]);*/
/*==== HomeWork ===*/

/*==== HomeWork ===*/
/*var name = "Dima";
if(name === "Dima"){
    console.log("Hello " + name)
} else {
    console.log("Hello stranger")
};*/
/*==== HomeWork ===*/

/*==== HomeWork ===*/
/*var x = 3;
while(x < 1000){
    console.log(x);
    x*=3;
}*/
/*==== HomeWork ===*/

/*function boo(){
    alert("Иди поспи, реально.");
};
var timer = setTimeout(boo, 1000);
clearTimeout(timer);*/

/*============ clearTimeout ==========
var counterTime = 1;
function message(){
    console.log("Ты смотришь в консоль уже " + counterTime + " сек");
    counterTime++;
        if(counterTime > 5){
            clearTimeout(intervalTimer);
        }
};
var intervalTimer = setInterval(message, 1000);
============ clearTimeout ==========*/

/*========== leftOffset ============
var leftOffset = 0;
var moving = function(){
    $("#footer").offset({left: leftOffset});
    leftOffset++;
    if(leftOffset > 100){
        leftOffset = 0;
    }
};
setInterval(moving, 50);
========== leftOffset ============*/

/*======== click ==========
function clickHandler(event){
    console.log("Координаты: X - " + event.pageX + " Y - " + event.pageY);
};
$("body").click(clickHandler);
======== click ==========*/

/*======= mousemove ==========
function moveHandler(event){
    $("#footer").offset({
        left: event.pageX,
        top: event.pageY
    });
};
$("html").mousemove(moveHandler);
======= mousemove ==========*/

/*======= constructor ==========
function Coords(x, y){
    this.x = x;
    this.y = y;
};

var audi = new Coords(150, 250);

Coords.prototype.model = function (){
    console.log("X = " + this.x + " Y = " + this.y);
};

audi.model();*/

/*function model(car){
    console.log("X = " + car.x + " Y = " + car.y);
};
model(nissan);
======= constructor ==========*/

/*===== for in =====
var array = [
    {
        "original_name": "Harry Potter and the philosopher's stone",
        "russian_name": "Гарри Поттер и философский камень",
        "year": 2001,
        "actors": [
            "Daniel Radcliffe",
            "Rupert Grint",
            "Emma Watson"
        ]
    },
    {
        "original_name": "Harry Potter and the chamber of secrets",
        "russian_name": "Гарри Поттер и тайная комната",
        "year": 2002,
        "actors": [
            "Daniel Radcliffe",
            "Rupert Grint",
            "Emma Watson"
        ]
    },
    {
        "original_name": "Harry Potter and the prisoner of Azkaban",
        "russian_name": "Гарри Поттер и узник Азкабана",
        "year": 2004,
        "actors": [
            "Daniel Radcliffe",
            "Rupert Grint",
            "Emma Watson"
        ]
    },
    {
        "original_name": "Harry Potter and the Goblet of Fire",
        "russian_name": "Гарри Поттер и Кубок огня",
        "year": 2005,
        "actors": [
            "Daniel Radcliffe",
            "Rupert Grint",
            "Emma Watson"
        ]
    }
];
for(let i in array){
    for(let j in array[i]) {
        if (j === "original_name") {
            console.log("Movie #" + i + "\nOriginal name: " + array[i][j]);
        } else if (j === "russian_name") {
            console.log("Russian name: " + array[i][j]);
        } else if (j === "year"){
            console.log("Year: " + array[i][j]);
        } else{
            console.log("Actors: ");
            for(let k in array[i][j]){
                console.log(array[i][j][k]);
            }
        }
    }
    console.log("\n");
};
===== for in =====*/

/*console.log(`Example: ${array[1]["year"]}`); //or "Example: " + array[1]["year"]*/

/*var age = 15;*/
/*console.log(age > 18 ? "Вы старше 18 лет" : "Вы младше 18 лет");*/
/*age === 18 ? console.log("Вам 18 лет") : age > 18 ? console.log("Вы старше 18 лет") : console.log("Вы младше 18 лет");*/
/*
switch (age){
    case 17: console.log("Вам 17 лет");
        break;
    case 18: console.log("Вам 18 лет");
        break;
    case 19: console.log("Вам 19 лет");
        break;
    default: console.log("Непонятно, сколько Вам лет");
};*/