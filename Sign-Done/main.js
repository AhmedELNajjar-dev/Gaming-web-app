// Sign Up Form Submission Handling
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting by default

    let email = document.getElementById('signUpEmail').value;
    let password = document.getElementById('signUpPassword').value;
    let confirmPassword = document.getElementById('signUpConfirmPassword').value;

    console.log('Sign Up form submitted');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);

    if (password === confirmPassword) {
        localStorage.setItem(email, password);
        alert('Sign-up successful!');
        // Optionally reset the form
        document.getElementById('signUpForm').reset();
    } else {
        alert('Passwords do not match!');
    }
});

// Sign In Form Submission Handling
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting by default

    let email = document.getElementById('signInEmail').value;
    let password = document.getElementById('signInPassword').value;

    console.log('Sign In form submitted');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    let storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        alert('Sign-in successful!');
        window.location.href = "../main page/index.html"; // Use href for redirection
    } else {
        document.getElementById('signInError').style.display = 'block';
    }
});
