const menuBtn = document.querySelector(".menu")
const sideBar = document.querySelector('.items-container');
const overlay = document.querySelector('.overlay');
const navbt=document.querySelectorAll('.item');
let menuOpen = false;
navbt.forEach((i)=>{
i.addEventListener('click',()=>{
  menuBtn.classList.remove("open");
  sideBar.style.right = "-100vw";
  overlay.style.display = "none";
  menuOpen = false;
})

})
menuBtn.addEventListener('click',() => {
  if(!menuOpen){
    menuBtn.classList.add("open");
    sideBar.style.right = "0px";
    overlay.style.display = "block";
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove("open");
    sideBar.style.right = "-100vw";
    overlay.style.display = "none";
    menuOpen = false;
  }
})
overlay.addEventListener('click',() => {
  menuBtn.classList.remove("open");
  menuOpen= false;
  sideBar.style.right = "-100vw";
  overlay.style.display = "none";
})

window.addEventListener('scroll',reveal);

function reveal() {
  const reveals=document.querySelectorAll('.reveal');
  for(let i of reveals) {
    var windowheight=window.innerHeight;
    var revealtop=i.getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop< (windowheight-revealpoint)){
      i.classList.add('active')
    }
    else{
      i.classList.remove('active')
    }

  };
  
}


let slideposition=0;
const slides=document.getElementsByClassName("carousel-item");
const tslides=slides.length;
console.log(tslides)

function updateposition() {
  for(let slide of slides ){
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
  }
  slides[slideposition].classList.add("carousel-item-visible")
}

function movetonext(){
  if(slideposition==2){
    slideposition=0;
  }
  else{    
    slideposition++;
    }
  updateposition()
}
 
function movetoprevious(){
  if(slideposition==0){
    slideposition=2;
  }
    else{
      slideposition--;
    }
  updateposition();
}

function drop(att){
  let temp=document.getElementById(`ans${att}`)
  let bt1=document.getElementById(`p${att}`)  
  let bt2=document.getElementById(`m${att}`)
  if(temp.style.display=="none"){
    temp.style.display="block"
    bt1.style.display="none"
    bt2.style.display="block"
  }
  else{
    temp.style.display="none"
    bt2.style.display="none"
    bt1.style.display="block"
 }


}