// // comp.js

// // document.addEventListener('DOMContentLoaded', () => {
// //     // Add click event to all "Add to Cart" buttons
// //     const buttons = document.querySelectorAll('.add-to-cart');
    
// //     buttons.forEach(button => {
// //         button.addEventListener('click', () => {
// //             alert('Added to Cart!');
// //         });
// //     });
// // });

//JavaScript to control popup visibility
        const loginBtn = document.getElementById('login-btn');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        const clientBtn = document.getElementById('client-btn');
        const organizerBtn = document.getElementById('organizer-btn');
        const closeBtn = document.getElementById('close-btn');



// Open popup on button click
loginBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

// Close popup on button click
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Handle Event Organizer button click
organizerBtn.addEventListener('click', () => {
    window.location.href = 'organizer-login.html'; // Redirect to organizer dashboard
});

// Handle Client button click
clientBtn.addEventListener('click', () => {
    window.location.href = 'login.html'; // Redirect to client dashboard
});

// Close popup when clicking outside the popup (on overlay)
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});




// // new js for pop-up


// document.addEventListener('DOMContentLoaded', () => {
//     //alert('JavaScript is working!'); // Add this to confirm JS loading
//     const loginBtn = document.getElementById('login-btn');
//     const overlay = document.getElementById('overlay');
//     const popup = document.getElementById('popup');
//     const closeBtn = document.getElementById('close-btn');
//     const organizerBtn = document.getElementById('organizer-btn');
//     const clientBtn = document.getElementById('client-btn');

//     // Open the popup when the login button is clicked
//     loginBtn.addEventListener('click', () => {
//         overlay.style.display = 'block';
//         popup.style.display = 'block';
//     });

//     // Close the popup
//     closeBtn.addEventListener('click', () => {
//         overlay.style.display = 'none';
//         popup.style.display = 'none';
//     });

//     // Navigate to Organizer Login
//     organizerBtn.addEventListener('click', () => {
//         window.location.href = "";
//     });

//     // Navigate to Client Login
//     clientBtn.addEventListener('click', () => {
//         window.location.href ="./views/client_login.html";
//     });

//     // Close popup if overlay is clicked
//     overlay.addEventListener('click', () => {
//         overlay.style.display = 'none';
//         popup.style.display = 'none';
//     });
// });







// document.addEventListener('DOMContentLoaded', function() {
//     // Get modal element
//     const modal = document.getElementById("loginModal");
//     const loginBtn = document.getElementById("loginBtn");
//     const closeBtn = document.getElementsByClassName("close")[0];

//     // Open modal
//     loginBtn.onclick = function() {
//         modal.style.display = "block";
//     }

//     // Close modal
//     closeBtn.onclick = function() {
//         modal.style.display = "none";
//     }

//     // Close modal when clicking outside of it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     // Handle login form submission
//     document.getElementById('loginForm').addEventListener('submit', async function(event) {
//         event.preventDefault();
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;

//         const response = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert('Login successful!');
//             modal.style.display = "none";  // Close modal on successful login
//         } else {
//             alert(data.message);
//         }
//     });
//  });


// /* sign up */

// document.addEventListener('DOMContentLoaded', function() {
//     // Get modal elements
//     const loginModal = document.getElementById("loginModal");
//     const signupModal = document.getElementById("signupModal");
//     const loginBtn = document.getElementById("loginBtn");
//     const registerLink = document.getElementById("registerLink");
//     const loginLink = document.getElementById("loginLink");
//     const closeBtns = document.querySelectorAll(".close");

//     // Open login modal
//     loginBtn.onclick = function() {
//         loginModal.style.display = "block";
//     }

//     // Open signup modal when clicking "Sign up" in login modal
//     registerLink.onclick = function() {
//         loginModal.style.display = "none";
//         signupModal.style.display = "block";
//     }

//     // Open login modal from sign-up modal
//     loginLink.onclick = function() {
//         signupModal.style.display = "none";
//         loginModal.style.display = "block";
//     }

//     // Close modals
//     closeBtns.forEach(btn => {
//         btn.onclick = function() {
//             loginModal.style.display = "none";
//             signupModal.style.display = "none";
//         }
//     });

//     // Close modal when clicking outside
//     window.onclick = function(event) {
//         if (event.target == loginModal || event.target == signupModal) {
//             loginModal.style.display = "none";
//             signupModal.style.display = "none";
//         }
//     }
// });


// // java script for fetch

// document.getElementById('signupForm').addEventListener('submit', async function(e) {
//     e.preventDefault();

//     const newUsername = document.getElementById('newUsername').value;
//     const newEmail = document.getElementById('newEmail').value;
//     const newPassword = document.getElementById('newPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             newUsername,
//             newEmail,
//             newPassword,
//             confirmPassword,
//         }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//         alert('Account created successfully!');
//         signupModal.style.display = "none"; // Close the modal on success
//     } else {
//         alert(data.msg); // Show error message if something went wrong
//     }
// });





// old code 


// comp.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Add click event to all "Add to Cart" buttons
//     const buttons = document.querySelectorAll('.add-to-cart');
    
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             alert('Added to Cart!');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Get modal element
    const modal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Open modal
    loginBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            modal.style.display = "none";  // Close modal on successful login
        } else {
            alert(data.message);
        }
    });
});


/* sign up */

document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const loginBtn = document.getElementById("loginBtn");
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    const closeBtns = document.querySelectorAll(".close");

    // Open login modal
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // Open signup modal when clicking "Sign up" in login modal
    registerLink.onclick = function() {
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    }

    // Open login modal from sign-up modal
    loginLink.onclick = function() {
        signupModal.style.display = "none";
        loginModal.style.display = "block";
    }

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == loginModal || event.target == signupModal) {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    }
});


// java script for fetch

document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            newUsername,
            newEmail,
            newPassword,
            confirmPassword,
        }),
    });

    const data = await response.json();

    if (response.ok) {
        alert('Account created successfully!');
        signupModal.style.display = "none"; // Close the modal on success
    } else {
        alert(data.msg); // Show error message if something went wrong
    }
});

