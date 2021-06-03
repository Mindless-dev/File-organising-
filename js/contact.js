const submitBtn = document.querySelector(".submitBtn");
const firstName = document.querySelector("#name");
const firstNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formContent = document.querySelector(".formContent");
const sucessMessage = document.querySelector(".sucessMessage");

function formSubmission(event) {
  event.preventDefault();
  let sucess = 0;

  if (characterChecker(firstName.value, 3)) {
    firstNameError.style.display = "none";
    sucess++;
  } else {
    firstNameError.style.display = "flex";
    firstNameError.style.margin = "10px auto";
  }

  if (emailValidation(email.value) & (email.value.trim().length > 0)) {
    emailError.style.display = "none";
    sucess++;
  } else {
    emailError.style.display = "flex";
    emailError.style.margin = "10px auto";
  }

  if (characterChecker(subject.value, 19)) {
    subjectError.style.display = "none";
    sucess++;
  } else {
    subjectError.style.display = "flex";
    subjectError.style.margin = "10px auto";
  }

  if (characterChecker(message.value, 30)) {
    messageError.style.display = "none";
    sucess++;
  } else {
    messageError.style.display = "flex";
    messageError.style.margin = "10px auto";
  }

  if (sucess === 4) {
    formContent.style.display = "none";
    sucessMessage.style.display = "inline-block";

    setTimeout(function () {
      formContent.style.display = "flex";
      sucessMessage.style.display = "none";
      firstName.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    }, 3000);
  }
}

submitBtn.addEventListener("click", formSubmission);

const characterChecker = function (value, characters) {
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
