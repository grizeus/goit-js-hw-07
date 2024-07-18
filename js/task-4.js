const handleSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.password.value;

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }

  const data = {
    email: { name: "email", value: emailValue.trim() },
    password: { name: "password", value: passwordValue.trim() },
  };

  console.log(data);
  form.reset();
};

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);