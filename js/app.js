const container = document.querySelector(".container");
const password = document.querySelector(".password");
const showPass = document.querySelector(".icofont-eye-blocked");
const loginBtn = document.querySelector("#login");
const cross = document.querySelector(".cross");

function showForm() {
  // show container element

  container.classList.add("show");
  loginBtn.style.display = "none";
}

function hideForm() {
  // hide container element

  container.classList.remove("show");
  loginBtn.style.display = "block";
}

showPass.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    showPass.classList.add("icofont-eye");
    showPass.classList.remove("icofont-eye-blocked");
  } else {
    password.type = "password";
    showPass.classList.remove("icofont-eye");
    showPass.classList.add("icofont-eye-blocked");
  }
});

window.addEventListener("keydown", function (event) {
  let keycode = event.which || event.keycode;

  if (keycode === 27) {
    hideForm();
  }
});
window.addEventListener("keydown", function (event) {
  let keycode = event.which || event.keycode;

  if (keycode === 13) {
    showForm();
  }
});

loginBtn.addEventListener("click", function () {
  showForm();
});

cross.addEventListener("click", function () {
  hideForm();
});
