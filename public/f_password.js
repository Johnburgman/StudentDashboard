document.getElementById('fPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Simulate password reset process
    alert(`If an account with the email ${email} exists, a password reset link will be sent.`);

    // Optionally, redirect to the login page or clear the form
    window.location.href = 'login.html';
});
