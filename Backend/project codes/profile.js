// Get user info from local storage
const userInfo = JSON.parse(localStorage.getItem('user'));

if (userInfo) {
    document.getElementById('name').value = userInfo.username || ''; // Use username
    document.getElementById('email').value = userInfo.email || '';
    // document.getElementById('address').value = userInfo.address || '';
    // document.getElementById('mobile').value = userInfo.mobile || '';
} else {
    // If no user info, redirect to login or show an error
    // alert("No user is logged in. Please log in first.");
    // window.location.href = 'comp.html'; // Redirect to login
    
    document.getElementById('name').value = ''; // Show 'Guest' when no user
    document.getElementById('email').value = ''; // Show 'Not logged in' when no user
}



document.getElementById("logout-btn").addEventListener("click", function() {
    // Clear user info from local storage
    localStorage.removeItem('userInfo');
    window.location.href = "comp.html"; // Redirect to home page
});


//connection 

// profile.js

document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user')); // Retrieve user data

    if (!userInfo) {
        // If no user data is found, alert the user and redirect to the login page
        // alert('No user is logged in, please log in first.');
        // window.location.href = 'comp.html'; // Redirect to the login page
    } else {
        // Populate the profile fields with user data
        document.getElementById('name').value = userData.username || ''; // Set the username
        document.getElementById('address').value = userData.address || ''; // Adjust according to your user data
        document.getElementById('mobile').value = userData.mobile || ''; // Adjust according to your user data
        document.getElementById('email').value = userData.email || ''; // Set the email
    }
});

// Logout functionality
document.getElementById("logout-btn").addEventListener("click", function() {
    // Clear localStorage on logout
    localStorage.removeItem('user'); // Remove user data from localStorage
    window.location.href = "comp.html"; // Redirect to home or login page
});







