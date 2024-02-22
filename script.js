
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Concatenate first and last name
    var fullName = firstName + " " + lastName;

    // Show alert with full name
    alert(fullName);
  });
});
