// DOM element selection
const emailField = document.getElementById("email-field");
const emailLabel = document.getElementById("email-label");
const emailError = document.getElementById("email-error");

// E-mail validation function
function validateEmail() {
  // Regular expression to validate email format
  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  // Checks if the email corresponds to the expected format
  if (!emailRegex.test(emailField.value)) {
    emailError.innerHTML = "Please enter a valid e-mail address";
    emailField.classList.add("error");
    emailField.classList.remove("valid");
    return false;
  }

  // Resets error message and applies valid style
  emailError.innerHTML = "";
  emailField.classList.remove("error");
  emailField.classList.add("valid");
  return true;
}

// Validation event when email field loses focus
emailField.addEventListener("blur", validateEmail);
