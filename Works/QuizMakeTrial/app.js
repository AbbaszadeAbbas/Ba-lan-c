const questionInput = document.getElementById("questionInput");
const clickToAdd    = document.getElementById("clickToAdd");
const question      = document.getElementById("question");
const variant1      = document.getElementById("variant1");
const variant2      = document.getElementById("variant2");
const variant3      = document.getElementById("variant3");
const A             = document.getElementById("A");
const B             = document.getElementById("B");
const C             = document.getElementById("C");
const addVariant    = document.getElementById("addVariant");



clickToAdd.addEventListener('click' , function(e){
  e.preventDefault();
  question.innerHTML = questionInput.value;
  variant1.style.visibility = "visible"
  variant2.style.visibility = "visible"
  variant3.style.visibility = "visible"
  A.style.visibility = "visible"
  B.style.visibility = "visible"
  C.style.visibility = "visible"
  addVariant.style.visibility = "visible"
})

addVariant.addEventListener('click' , function(e){
  e.preventDefault();
  A.innerHTML = "A) " + variant1.value;
  B.innerHTML = "B) " + variant2.value;
  C.innerHTML = "C) " + variant3.value;
})