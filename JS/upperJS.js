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