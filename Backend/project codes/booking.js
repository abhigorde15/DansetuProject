// document.getElementById('bookEventButton').addEventListener('click', async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Gather form data
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const email = document.getElementById('email').value;
//     const numGuests = Number(document.getElementById('numGuests').value);
//     const date = new Date(document.getElementById('date').value).toISOString();
//     const time = document.getElementById('time').value;

//     // Send data to the server without user ID
//     try {
//         const response = await fetch('http://localhost:3000/api/book-event', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ 
//                 firstName, 
//                 lastName, 
//                 email, 
//                 numGuests, 
//                 date, 
//                 time
//             })
//         });

//         if (response.ok) {
//             const data = await response.json();
//             alert(data.message); // Show success message
//             document.getElementById('bookingForm').reset(); // Optionally clear form
//         } else {
//             const errorData = await response.json();
//             alert('Error: ' + errorData.message);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('There was an error booking the event.');
//     }
// });




document.getElementById('bookEventButton').addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Gather form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const numGuests = Number(document.getElementById('numGuests').value);
    const dateInput = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Validate inputs
    if (!firstName || !lastName || !email || !numGuests || !dateInput || !time) {
        return alert('Please fill out all fields.');
    }

    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
        return alert('Invalid date format.');
    }

    // Format date to ISO string
    const formattedDate = date.toISOString();

    try {
        const response = await fetch('http://localhost:3000/api/book-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                firstName, 
                lastName, 
                email, 
                numGuests, 
                date: formattedDate, 
                time 
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message || 'Event booked successfully!');
            document.getElementById('bookingForm').reset(); // Clear form
        } else {
            const errorData = await response.json();
            alert('Error: ' + (errorData.message || 'Unknown error occurred'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error booking the event. Please try again.');
    }
});

