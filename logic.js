const first = document.querySelector(".first-input");
const second = document.querySelector(".second-input");
const third = document.querySelector(".third-input");
const forth = document.querySelector(".fourth-input");
const fifth = document.querySelector(".fifth-input");



function onSubmit() {
  if (first.value !== "" && second.value !== "" && third.value !== "" && forth.value !== "" && fifth.value !== "" && fifth.value.length > 49 ) {
    alert("Booking Successfull");
  }
}

const scrollToTop = document.querySelector('#go-up')

window.onscroll = function scroll(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
    scrollToTop.style.opacity = '1'
  }
  else{
    scrollToTop.style.opacity = '0'
  }
}









