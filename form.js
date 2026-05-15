
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(e){

      e.preventDefault();

      document.getElementById("nameError").innerHTML = "";
      document.getElementById("emailError").innerHTML = "";
      document.getElementById("passwordError").innerHTML = "";
      document.getElementById("phoneError").innerHTML = "";
      document.getElementById("successMessage").innerHTML = "";

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value.trim();
      let phone = document.getElementById("phone").value.trim();

      let isValid = true;

      // Name Validation
      if(name === ""){
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
      }

      // Email Validation
      let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(email === ""){
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
      }
      else if(!email.match(emailPattern)){
        document.getElementById("emailError").innerHTML = "Enter valid email";
        isValid = false;
      }

      // Password Validation
      if(password === ""){
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
      }
      else if(password.length < 6){
        document.getElementById("passwordError").innerHTML = "Minimum 6 characters";
        isValid = false;
      }

      // Phone Validation
      let phonePattern = /^[0-9]{10}$/;

      if(phone === ""){
        document.getElementById("phoneError").innerHTML = "Phone number required";
        isValid = false;
      }
      else if(!phone.match(phonePattern)){
        document.getElementById("phoneError").innerHTML = "Enter valid 10 digit number";
        isValid = false;
      }

      // Success Message
      if(isValid){
        document.getElementById("successMessage").innerHTML =
        "Form Submitted Successfully!";
      }

    });
