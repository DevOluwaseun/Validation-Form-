const error = document.querySelectorAll("p");
const fields = document.querySelectorAll(".field");
const checkBox = document.querySelector(".checkbox");
const query = document.getElementsByName("check1");
const button = document.querySelector(".btn");
const firstname = document.querySelector(".firstname");
const firstnameErr = document.querySelector(".firstnameErr");
const lastname = document.querySelector(".lastname");
const lastnameErr = document.querySelector(".lastnameErr");
const email = document.querySelector(".emailInput");
const emailErr = document.querySelector(".emailErr");
const queryErr = document.querySelector(".queryErr");
const message = document.querySelector(".message");
const messageErr = document.querySelector(".messageErr");
const consentErr = document.querySelector(".consentErr");
const queryContainer = document.querySelector(".query_container");
const success = document.querySelector(".success");

button.addEventListener("click", function (e) {
  e.preventDefault();

  let isChecked = false;
  let filled = true;
  firstnameErr.style.display = "none";
  lastnameErr.style.display = "none";
  emailErr.style.display = "none";
  messageErr.style.display = "none";
  consentErr.style.display = "none";

  query.forEach((query) => {
    if (query.checked) {
      isChecked = true;
      console.log(query);
      query.parentElement.classList.add("queryBK");
    } else {
      query.parentElement.classList.remove("queryBK");
    }
  });
  if (firstname.value === "") {
    firstnameErr.style.display = "block";
    filled = false;
  }
  if (lastname.value === "") {
    lastnameErr.style.display = "block";
    filled = false;
  }
  if (email.value === "") {
    emailErr.style.display = "block";
    filled = false;
  }
  if (message.value === "") {
    messageErr.style.display = "block";
    filled = false;
  }
  if (!checkBox.checked) {
    consentErr.style.display = "block";
    filled = false;
  }

  if (!isChecked) {
    queryErr.style.display = "block";
    filled = false;
  }

  if (filled && isChecked) {
    success.style.display = "block";
  }
});
