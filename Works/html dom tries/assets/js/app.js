const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const alt__tab2 = document.querySelector(".alt__tab2");
const alt__tab1 = document.querySelector(".alt__tab1");
let i = 0;
let j = 0;

tab1.addEventListener("click", function () {
  if (i == 0) {
    alt__tab1.style.display = "block";
    i++;
  } else {
    alt__tab1.style.display = "none";
    i--;
  }
});

tab2.addEventListener("click", function () {
  if (j == 0) {
    alt__tab2.style.display = "block";
    j++;
  } else {
    alt__tab2.style.display = "none";
    j--;
  }
});