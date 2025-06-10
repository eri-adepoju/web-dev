const contact_form = document.getElementById("contact-form");

contact_form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for your message");
      let name = document.getElementById("name").value;
      let surname = document.getElementById("surname").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let form = {"name": name, "surname": surname, "email": email, "message": message}
      localStorage.setItem("message", JSON.stringify(form))
    });
