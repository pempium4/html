var array = ["Hello", "Thanks", "Bye"];
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
}


var myFriends = [
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

console.log(myFriends[1].name + ". His iq equals " + myFriends[2]["iq"]);

/*==== HomeWork ===*/
var obj = {
    name: "Nelep",
    array: [7, 9, {purpose: "putan", number: 123}, 3.3],
    animal: "Shark"
};
console.log(obj.array[2].number); // or console.log(obj["array"][2]["number"]);
/*==== HomeWork ===*/

/*==== HomeWork ===*/
var name = "Dima";
if(name === "Dima"){
    console.log("Hello " + name)
} else {
    console.log("Hello stranger")
};
/*==== HomeWork ===*/

/*==== HomeWork ===*/
var x = 3;
while(x < 1000){
    console.log(x);
    x*=3;
}
/*==== HomeWork ===*/

function boo(){
    alert("Иди поспи, реально.");
};
var timer = setTimeout(boo, 1000);
clearTimeout(timer);

/*var counterTime = 1;
function message(){
    console.log("Ты смотришь в консоль уже " + counterTime + " сек");
    counterTime++;
        if(counterTime > 5){
            clearTimeout(intervalTimer);
        }
};
var intervalTimer = setInterval(message, 1000);
*/

/*
var leftOffset = 0;
var moving = function(){
    $("#footer").offset({left: leftOffset});
    leftOffset++;
    if(leftOffset > 100){
        leftOffset = 0;
    }
};
setInterval(moving, 50);
*/

function clickHandler(event){
    console.log("Координаты: X - " + event.pageX + " Y - " + event.pageY);
};
$("body").click(clickHandler);

/*
function moveHandler(event){
    $("#footer").offset({
        left: event.pageX,
        top: event.pageY
    });
};
$("html").mousemove(moveHandler);
*/
