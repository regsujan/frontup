document.querySelector('.signup-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password2').value;
    const errorMessage = document.querySelector('.error-msg');
    const successMessage = document.getElementById('message');

    // Check if the password is at least 10 characters long
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
    }

    // Store user data in localStorage
    localStorage.setItem('username', username);

    // Display success message
    successMessage.style.display = 'block';
    successMessage.textContent = 'You are successfully registered!';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
    errorMessage.textContent = '';

    // Redirect to new page after 2 seconds
    setTimeout(() => {
        window.location.href = 'welcome.html';
    }, 2000);
});
