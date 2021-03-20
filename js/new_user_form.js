const form = document.querySelector("#newUserform");
const username = document.querySelector("#name");
const usernameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#repeat_password");
const confirmPasswordError = document.querySelector("#repeat_passwordError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#adressError");
const areaCode = document.querySelector("#area_code");
const areaCodeError = document.querySelector("#area_codeError");

function formValidation(event) {
  let i = 0;
  event.preventDefault();

  if (lengthInputTest(username.value, 3)) {
    usernameError.style.display = "none";
    i += 1;
  } else {
    usernameError.style.display = "block";
  }

  if (emailValidation(email.value) & (email.value.trim().length > 0)) {
    emailError.style.display = "none";
    i += 1;
  } else {
    emailError.style.display = "block";
  }

  if (passwordValidation(password.value)) {
    passwordError.style.display = "none";
    i += 1;
  } else {
    passwordError.style.display = "block";
  }

  if (password.value === confirmPassword.value) {
    confirmPasswordError.style.display = "none";
    i += 1;
  } else {
    confirmPasswordError.style.display = "block";
  }

  if (lengthInputTest(address.value, 13)) {
    addressError.style.display = "none";
    i += 1;
  } else {
    addressError.style.display = "block";
  }

  if (areaCode.value.length === 4) {
    areaCodeError.style.display = "none";
    i += 1;
  } else {
    areaCodeError.style.display = "block";
  }
  if (i === 6) {
    form.submit();
  }
}

form.addEventListener("submit", formValidation);

const lengthInputTest = function (value, characters) {
  if (value.trim().length >= characters) {
    return true;
  } else {
    return false;
  }
};

function emailValidation(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}

/* invalid email*/

function passwordValidation(password) {
  const regEX = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  const passwordMatch = regEX.test(password);
  return passwordMatch;
}
