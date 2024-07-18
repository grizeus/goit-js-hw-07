const form = document.querySelector(".login-form");

form.addEventListener("input", event => {
  event.preventDefault();
    const curInput = event.currentTarget.value.trim();
    console.log(curInput);
    if (curInput === "") {
        alert("All form fields must be filled in");
    }
//   if (curInput !== "") {
//     output.textContent = curInput;
//   } else {
//     output.textContent = "Anonymous";
//   }
});
