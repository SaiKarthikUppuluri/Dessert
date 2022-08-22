let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();

var colour=document.querySelector(".logo");
function Random() {
  var letters="0123456789ABCDEF";
  var random="#";
  for(var i=0;i<6;i++)
  {
    random+=letters[Math.floor(Math.random()*16)];
  }
  return random;
}
function change() {
  input=Random();
  colour.style.color=input;
}
setInterval("change()",490)