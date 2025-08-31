//your JS code here. If required.
// Get the input field
const inputField = document.getElementById("fname");

// Add blur event (when user leaves the input field)
inputField.addEventListener("blur", function() {
  inputField.value = inputField.value.toUpperCase();
});