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

function insert(num){
    let val = $('#input input');
    val.val(val.val() + num);
}
function clean(){
    $('#input input').val(null);
}
function back(){
    let val = $('#input input');
    val.val((val.val()).slice(0, (val.val()).length-1));
}
function equal(){
    let val = $('#input input');
    if (val.val()){
        val.val(eval(val.val()));
    }
}
$('.grid-items:not(#input)').mouseover(function (){
    $('.grid-items:not(#input)').css('background', '');
    $(this).css('background', 'coral');
})
/*===== calculator =====*/

/*===== js elem-control =====*/

$('#add').click(function (){
    let info = prompt("Введите текст");
    if (info === null){
        return;
    }
    let p = document.createElement('p');
    let text = document.createTextNode(info);
    p.appendChild(text);

    let div = document.getElementById('changeText');
    div.appendChild(p);
})

$('#remove').click(function (){
    let div = document.getElementById('changeText');
    let p = document.querySelectorAll('#changeText p');
    if (p[0] === undefined){
        return;
    }
    div.removeChild(p[0]);
})

$('#replace').click(function (){
    let div = document.getElementById('changeText');
    let p = document.querySelectorAll('#changeText p');
    if (p[0] === undefined){
        return;
    }
    let info = prompt("Введите текст");
    if (info === null){
        return;
    }
    let newP = document.createElement('p');
    let text = document.createTextNode(info);
    newP.appendChild(text);

    div.replaceChild(newP, p[0]);
})

let div = document.getElementById('date');
div.onclick = function (){
    let date = document.createTextNode(Date());
    let div = document.getElementById('dateBlock');
    div.appendChild(date);
    div.value = div.value.toUpperCase();
}

function validate(){
    let n1 = document.getElementById('num1');
    let n2 = document.getElementById('num2');
    if(n1.value !== "" && n2.value !== ""){
        if(n1.value === n2.value){
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}

/*===== js elem-control =====*/

/*===== remembering ======*/

rec = 45;
/*alert(rec);*/

names = 'John, Mike, Bob';

arr = names.split(', ')
/*alert(arr.pop());
alert(arr.shift());
alert(arr);*/
/*alert(arr.join(' | '));*/

arr2 = ['I', 'go', 'home'];
arr2.splice(3, 0, "We", 'go', 'at', 'work');
/*alert(arr2.reverse());*/


/*======= INPUTS ========*/


/*======= user input size ========*/
/*objSize = {
    height: 'px',
    width : 'px'
}
size = prompt('Введите высоту и ширину через пробел');
arrSize = size.split(' ');

objSize.height = arrSize[0].concat(objSize.height);
objSize.width = arrSize[1].concat(objSize.width);

divBlock = document.getElementById('objSize');
divBlock.style.width = objSize.width;
divBlock.style.height = objSize.height;
/*======= user input size ========*/


/*======= radio ========*/
function rad(){
    radio = document.getElementsByName('rd');
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            alert(`Выбран ${i} элемент`);
        }
    }
}
/*======= radio ========*/

/*======= select ========*/
function select(){
    let selected = document.getElementById('mySelect').selectedIndex;
    let option = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + option[selected].text);
}
/*======= select ========*/

/*======= range ========*/
divBlock = document.getElementById('objSize');
function range(){
    var range = document.getElementById('range');
    document.getElementById('rangeP').value = range.value;
    divBlock.style.width = `${range.value}px`;
}
/*======= range ========*/

/*======= border radius ========*/
function border() {
    let arr = [];
    arr[0] = $('#top_left input:first-child').val();
    arr[1] = $('#top_right input:first-child').val();
    arr[2] = $('#bottom_right input:first-child').val();
    arr[3] = $('#bottom_left input:first-child').val();
    console.log(arr[1])
    $('#top_left input:last-child').val(arr[0]);
    $('#top_right input:last-child').val(arr[1]);
    $('#bottom_right input:last-child').val(arr[2]);
    $('#bottom_left input:last-child').val(arr[3]);

    $('#block').css('border-radius', `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px`)
        .text(`border-radius: ${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px;`);
}
/*======= border_radius ========*/

/*======= tab menu ========*/
/*let tab = $('.tab');
let tabContent = $('.tab_content');

tab.click(function (){
    let index = $(this).index();
    tab.removeClass('tab_border');
    $(this).addClass('tab_border');
    tabContent.removeClass('show_tab_content');
    $(tabContent[index]).addClass('show_tab_content');
});*/

let tab = document.getElementsByClassName('tab');
let tabContent = document.getElementsByClassName('tab_content');

for(let i = 0; i < tab.length; i++){
    tab[i].onclick = function (){
        for (let j = 0; j < tab.length; j++){
            tab[j].classList.remove('tab_border');
            tabContent[j].classList.remove('show_tab_content');
        }
        tab[i].classList.add('tab_border');
        tabContent[i].classList.add('show_tab_content');
    }
}
/*======= tab menu ========*/

/*======= modal window ========*/
let show = document.getElementById('block');
let hide = document.getElementById('close');

let modal = document.getElementById('modal');
let modalBg = document.getElementById('modal_bg');

show.onclick = function (){
    modal.style.display = 'flex';
    modalBg.style.display = 'block';
}
hide.onclick = function (){
    modal.style.display = '';
    modalBg.style.display = '';
}
window.onclick = function (event){
    if(event.target === modalBg){
        modal.style.display = '';
        modalBg.style.display = '';
    }
}
/*======= modal window ========*/

/*======= animate ========*/
let animMover = document.getElementById('mover');
let offset = 0;
/*let margin = 0;*/

/*animMover.onclick = function (){
    let moving = setInterval(function (){
        animMover.style.marginLeft = margin+'px';
        margin++;
        if(margin === 448){
            clearInterval(moving);
        }
    }, 10)
}*/

animMover.onclick = function (){
    let moving = setInterval(function (){
        animMover.style.left = offset+'px';
        animMover.style.top = offset+'px';
        offset++;
        if (offset > 447){
            clearInterval(moving);
        }
    }, 10)
};
/*======= animate ========*/

/*======= filter ========*/
let input = document.getElementById('inputFilter');
let ul = document.getElementById('ulFilter');
let liArr = ul.getElementsByTagName('li');

function filter(){
    let res = input.value.toLowerCase();
    for(let i = 0; i < liArr.length; i++){
        if(liArr[i].textContent.toLowerCase().indexOf(res) > -1){
                liArr[i].style.display = '';
        }else{
                liArr[i].style.display = 'none';
        }
    }
}
/*======= filter ========*/

/*======= progressBar ========*/
let progressBar = document.getElementById('progressBar');
progressBar.style.width = '0%';
let width = 0;

let progress = setInterval(function (){
    if(width < 100){
        width++;
        progressBar.textContent = `${width}%`;
    }else{
        clearInterval(progress);
    }
    progressBar.style.width = `${width}%`;
}, 30);
/*======= progressBar ========*/

/*======= toDo ========*/
let addTask = document.getElementById('addTask');

addTask.onclick = function (){
    let value = document.getElementById('inputTD').value;
    let section = document.createElement('section');
    section.innerHTML = `<p>${value}</p><span>&times;</span>`
    addTask.after(section);
}
let toDo = document.getElementById('toDo');
let section = toDo.getElementsByTagName('section');

toDo.onclick = function (event){
    for(let i = 0; i < section.length; i++){
        if(event.target === section[i].firstChild){
            section[i].classList.add('done');
        }else if(event.target === section[i].lastChild){
            toDo.removeChild(section[i]);
        }
    }
}
/*======= toDo ========*/

/*======= INPUTS ========*/