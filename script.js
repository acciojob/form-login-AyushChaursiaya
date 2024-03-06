
// document.addEventListener("DOMContentLoaded", function() {
//   var form = document.getElementById("myForm");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
    
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;

//     // Concatenate first and last name
//     var fullName = firstName + " " + lastName;

//     // Show alert with full name
//     alert(fullName);
//   });
// });


function getFormValue() {
    // Get the values of first and last name
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Concatenate first and last name
    var fullName = firstName + " " + lastName;

    // Display the full name in an alert
    alert(fullName);
}

// Add an event listener to the form for submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the getFormValue function
    getFormValue();
});
