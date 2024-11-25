const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function myfunction(){
  var x =document.getElementById("psw_signin");
  if (x.type ==="password"){
      x.type = "text";
  }
  else{
      x.type = "password";
  }

}