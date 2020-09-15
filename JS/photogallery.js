var imageArray = [
    "https://64.media.tumblr.com/f360f9d775f749ed8830aed5d16a345d/tumblr_paagxc021x1wpglvuo4_1280.jpg",
    "https://64.media.tumblr.com/cc35eb17410bb75c22d44738049c93d2/tumblr_paagxc021x1wpglvuo5_1280.jpg",
    "https://64.media.tumblr.com/62a8bbf6ece07cadfdffeeff3fb2d50d/tumblr_paagxc021x1wpglvuo7_1280.jpg",
    "https://64.media.tumblr.com/fca11eee6bf8f3380d02bdc8e9dd0c21/tumblr_paagxc021x1wpglvuo9_1280.jpg",
    "https://64.media.tumblr.com/1f26e5a5d5bf959d7c2e255dec00df50/tumblr_paagxc021x1wpglvuo8_1280.jpg"
];
var imageCount = imageArray.length;

document.getElementById("image").src = imageArray[0];
var counter = 0;

function right_click(){
    if(counter === (imageCount) - 1){
        counter = 0;
        document.getElementById("image").src = imageArray[counter];
    }else{
        ++counter;
        document.getElementById("image").src = imageArray[counter];
    }
}

function left_click(){
    if(counter === 0){
        counter = (imageCount) - 1;
        document.getElementById("image").src = imageArray[counter];
    }else{
        --counter;
        document.getElementById("image").src = imageArray[counter];
    }
}