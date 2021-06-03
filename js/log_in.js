const logInButton = document.querySelector("#log_in");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const fieldset = document.querySelector("fieldset");
const form = document.querySelector("form");

function logIn(event) {
  event.preventDefault();
  let sucessCount = 0;
  if (username.value.length > 0) {
    usernameError.style.display = "none";
    fieldset.style.height = "500px";
    sucessCount++;
  } else {
    usernameError.style.display = "flex";
    fieldset.style.height = "580px";
  }

  if (password.value.length > 0) {
    passwordError.style.display = "none";
    fieldset.style.height = "500px";
    sucessCount++;
  } else {
    passwordError.style.display = "flex";
    fieldset.style.height = "580px";
  }
  if (sucessCount === 2) {
    location.assign("account.html");
  }
}

logInButton.addEventListener("click", logIn);
