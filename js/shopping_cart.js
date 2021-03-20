const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#street_address");
const addressError = document.querySelector("#street_addressError");
const areaCode = document.querySelector("#area_code");
const areaCodeError = document.querySelector("#area_codeError");
const cardNo = document.querySelector("#account_number");
const cardNoError = document.querySelector("#account_numberError");
const expiryDate = document.querySelector("#expiry_date");
const expiryDateError = document.querySelector("#expiry_dateError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function formValidation(event) {
  event.preventDefault();
  let i = 0;
  if (emailValidation(email.value) & (email.value.trim().length > 0)) {
    emailError.style.display = "none";
    i += 1;
  } else {
    emailError.style.display = "block";
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

  if (cardNo.value.length === 16) {
    cardNoError.style.display = "none";
    i += 1;
  } else {
    cardNoError.style.display = "block";
  }

  if (lengthInputTest(expiryDate.value, 4)) {
    expiryDateError.style.display = "none";
    i += 1;
  } else {
    expiryDateError.style.display = "block";
  }

  if (cvc.value.length === 3) {
    cvcError.style.display = "none";
    i += 1;
  } else {
    cvcError.style.display = "block";
  }
  console.log(i);
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
