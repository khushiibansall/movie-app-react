const form = document.getElementById("myForm");
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value; 
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

        const nameError = document.getElementById('nameError');
        const ageError = document.getElementById('ageError');
    const userError = document.getElementById('userError');
        const passError = document.getElementById('passError');

    nameError.textContent = '';
        ageError.textContent = '';
    userError.textContent = '';
    passError.textContent = '';

    let hasError = false;

    if (name === "") {
        nameError.textContent = 'name is required';
        hasError = true;
    } else if (name.length < 3) {
        nameError.textContent = 'name should atleast be 3 letters, please dont add nicknames';
        hasError = true;
    }

    if (isNaN(age) || age <= 0) {
        ageError.textContent = 'age is required and should be a positive number';
        hasError = true;
    }

    if (username === "") {
        userError.textContent = 'username is required';
        hasError = true;
    } else if (username.length < 6) {
        userError.textContent = 'username must be at least 6 characters long';
        hasError = true;
    }

    if (password === "") {
        passError.textContent = 'password is required';
        hasError = true;
    } else if (password.length < 8) {
        passError.textContent = 'password should be at least 8 characters long';
        hasError = true;
    }

    if (!hasError) {
        alert("YAYYY, form submitted successfully!!!!");
    }
}
