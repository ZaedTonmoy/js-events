var h1=document.querySelector("h1");
var a= document.querySelector("a");

a.addEventListener('click', function() {
    h1.innerHTML="We are successfull";
});


var hellow= document.querySelector(".hellow");
console.log(hellow);

var hi=document.querySelector(".hi");
console.log(hi);

hi.addEventListener('click', function(){
    hellow.innerHTML="I have Changed..YOOOO";
});