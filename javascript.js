const passwordNode = document.querySelector("#userPassword");
const confirmInput = document.querySelector("#passwordConfirm");
const confirmLabel = confirmInput.parentElement;

confirmInput.addEventListener("input", checkPasswords);
passwordNode.addEventListener("input", checkPasswords);

function checkPasswords(e) {
  let pass1 = passwordNode.value;
  let pass2 = confirmInput.value;

  // prevents error messages when you just begin typing
  if (pass2 === "") return;

  if (pass2 !== pass1) {
    confirmLabel.classList.add("passwordError")
  }
  else {
    confirmLabel.classList.remove("passwordError")
    confirmInput.setCustomValidity("");
  }
}


const formNode = document.querySelector("form");

formNode.addEventListener("submit", (event) => {
  let pass1 = passwordNode.value;
  let pass2 = confirmInput.value;

  if (pass1 !== pass2) {
    confirmInput.setCustomValidity("Passwords need to match");
    confirmInput.reportValidity();
    event.preventDefault();
  }
})