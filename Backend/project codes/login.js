document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        const userData = await response.json(); // Get user data from the response
        // console.log(userData);
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(userData));

        alert('Login successful!'); // Notify user of success
        // Redirect to your desired page
        window.location.href = 'comp.html'; // Keep this line as it is
    } else {
        const errorMessage = await response.text();
        alert('Login failed: ' + errorMessage); // Notify user of failure
    }
});

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        alert('Account created successfully! You can now log in.'); // Handle successful registration
        toggleForms(); // Switch back to the login form
    } else {
        const errorMessage = await response.text();
        alert('Registration failed: ' + errorMessage); // Handle registration failure
    }
});

// Function to toggle between login and registration forms
function toggleForms() {
    const loginDiv = document.querySelector('.login-container');
    const registerDiv = document.getElementById('register');
    
    if (registerDiv.style.display === "none") {
        loginDiv.style.display = "none"; // Hide login form
        registerDiv.style.display = "block"; // Show register form
    } else {
        loginDiv.style.display = "block"; // Show login form
        registerDiv.style.display = "none"; // Hide register form
    }
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function () {
    // Hide profile and show login form again
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('profileSection').style.display = 'none';
});
