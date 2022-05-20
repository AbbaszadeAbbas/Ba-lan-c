const insideBox = document.querySelector(".com");
const  error1   = document.querySelector(".error1");
const  error2   = document.querySelector(".error2");
const  email    = document.querySelector("#email");
const  password    = document.querySelector("#password");
const login_button = document.querySelector("#login_button")

login_button.addEventListener('click' , login)

function login(){
 if(email.value == ""){
   error1.style.visibility = "visible"
 }else{
  error1.style.visibility = "hidden"
 }

  if(password.value == ""){
   error2.style.visibility = "visible"
 }else{
  error2.style.visibility = "hidden" 
 }

 if(password.value !== "" && email.value !== ""){
   alert("Login Success")
 }
}

function Yuxari() {
  insideBox.style.transform = "translateY(580px)"

}

function Asagi() {
  insideBox.style.transform = "translateY(-600px)"
}

function Sifirla() {
  insideBox.style.transform = "translateY(0px)"
}

