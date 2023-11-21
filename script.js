// script.js

// Function to get form values and display them using alert
function getFormValues() {
  // Get the form element
  var form = document.getElementById('myForm');

  // Get the values of the First and Last Name input fields
  var firstName = form.elements['firstName'].value;
  var lastName = form.elements['lastName'].value;

  // Display the values using alert
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}

// Event listener for form submission
document.getElementById('submitBtn').addEventListener('click', getFormValues);
