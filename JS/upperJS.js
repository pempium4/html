$('#btn').click(function (){
    let dots = $('#dots');
    if (dots.css('display') === 'inline'){
        $('#more').slideDown(500).css('display', 'block');
        dots.css('display', 'none');
        $(this).text("Less");
    }else{
        $('#more').slideUp(500);
        dots.css('display', 'inline');
        $(this).text("More");
    }
});
/*===== on JS =====
function readMore(){
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "More";
        more.style.display = "none";
    }else{
        dots.style.display = "none";
        btn.innerHTML = "Less";
        more.style.display = "block";
    }
};
===== on JS =====*/

/*===== anchor on JS =====*/
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
}
/*===== anchor on JS =====*/

/*===== JS vs jQuery =====

//by id
let jqElem = $('#id');
let jsElem = document.getElementById("id");

//by tag name
let jqElem = $('div');
let jsElem = document.getElementsByTagName("div");

//by class
let jqElem = $('.class');
let jsElem = document.getElementsByClassName("class");

//by selector
let jqElem = $('div #id');
let jsElem = document.querySelectorAll("div#id");

//set text
jqElem.text('hello');
jsElem.textContent = "hello"; or jsElem.innerText = "hello";

//get content
console.log(jqElem.text());
console.log(jsElem.textContent); or console.log(jsElem.innerText);

//set html content
jqElem.html('<p>Hello</p>');
jsElem.innerHTML = "<p>Hello</p>";

//get html content
console.log(jqElem.html());
console.log(jsElem.innerHTML);

//hide elements
jqElem.hide();
jsElem.style.display = "none";

//show elements
jqElem.show();
jsElem.style.display = "";

//change css styles
jqElem.css('font-size', '1.2em');
jsElem.style.fontSize = "1.2em";

//remove elements
jqElem.remove();
jsElem.parentNode.removeChild(jsElem);

//get parent element
console.log(jqElem.parent());
console.log(jsElem.parentNode);

===== JS vs jQuery =====*/

/*============================================*/

/*===== creating table =====*/
const PHONE_NUMBER = {
    "Firefighters":[
        ['Number 1', '101'],
        ['Number 2', '112'],
        ['Number 3', '01'],
    ],
    "Police":[
        ['Number 1', '102'],
        ['Number 2', '112']
    ],
    "Ambulance":[
        ['Number 1', '103']
    ]
};
document.querySelector("#table").innerHTML = `<table class="phone"></table>`;
for (let key in PHONE_NUMBER){
    let row = document.createElement('tr');
    row.innerHTML = `<th colspan="2">${key}</th>`;
    document.querySelector(".phone").appendChild(row);
    for (let number in PHONE_NUMBER[key]){
        let rowNumb = document.createElement('tr');
        rowNumb.innerHTML = `<td>${PHONE_NUMBER[key][number][0]}</td><td>${PHONE_NUMBER[key][number][1]}</td>`
        document.querySelector(".phone").appendChild(rowNumb);
    }
}
/*===== creating table =====*/


/*
console.log((15,85));

for(let i = 10; i--;){
    console.log(i);
}

/!*==============================*!/
var func = function (name){
    for (let i = arguments.length; i--;){
        console.log(arguments[i]);
    }
    return "Hello " + name;
}
console.log(func("Dmitry", 45, 67));
/!*==============================*!/

/!*==============================*!/
var func2 = function (callback){
    var name = "Dmitry";
    callback(name);
};
func2(function (n){
    console.log("Hi " + n);
});
/!*====== equals ======*!/
var func21 = function (){
    return "Oleg";
}
var func22 = function (func){
    console.log("Hi " + func);
}
func22(func21());
/!*==============================*!/

/!*==============================*!/
var func3 = function (){
    return function (){
        console.log("Hi");
    }
};
func3()();
/!*==============================*!/

/!*==============================*!/
var greeting = function (name){
    return "Hello " + name;
}("Dmitry");
console.log(greeting);
/!*==============================*!/

/!*==============================*!/
var counter = (function(){
    var count = 0;
    return function (){
        return count++;
    }
}());
console.log(counter());
/!*==============================*!/

/!*==============================*!/
var calculate = function(n){
    if(n === 0){
        throw new Error("'n' can't equal to zero!");
    }
    return 10/n;
};
try {
    calculate(0);
}catch (e){
    console.log("Can't execute calculate: " + e.message);
}finally {
    console.log("Try/catch block is finished");
}
/!*==============================*!/*/

/*===== calculator =====*/

var result = 0;

/*===== calculator =====*/