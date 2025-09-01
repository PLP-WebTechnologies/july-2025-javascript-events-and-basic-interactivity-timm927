document.addEventListener("DOMContentLoaded", function() {
  
  const toggleBtn = document.getElementById("toggleDark");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  let counter = 0;
  const counterBtn = document.getElementById("counterBtn");
  counterBtn.addEventListener("click", () => {
    counter++;
    counterBtn.textContent = `Click me: ${counter}`;
  });

  const form = document.getElementById("myForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email!";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    form.reset();
  });

});
