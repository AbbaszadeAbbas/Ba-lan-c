const insideBox = document.querySelector(".com");
const  error1   = document.querySelector(".error1");
const  error2   = document.querySelector(".error2");
const  inpt1    = document.querySelector(".inpt1");
const  inpt2    = document.querySelector(".inpt2");
const login_button = document.querySelector(".login-button")


function Yuxari() {
  insideBox.style.transform = "translateY(580px)"

}

function Asagi() {
  insideBox.style.transform = "translateY(-600px)"
}

function Sifirla() {
  insideBox.style.transform = "translateY(0px)"
}

login_button.addEventListener('click' , function(e) {
  e.preventDefault();

  if(inpt1.value == ""){
    error1.style.visibility = "visible"
  }else{
    error1.style.visibility = "hidden"
  }

  if(inpt2.value == ""){
    error2.style.visibility = "visible"
  }else{
    error2.style.visibility = "hidden"
  }
})