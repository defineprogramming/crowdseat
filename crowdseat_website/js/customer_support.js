```javascript
// Importing required dependencies
import { userDetails } from './main.js';

// DOM Elements
const customerSupportPanel = document.getElementById('customerSupportPanel');

// Function to provide customer support
function provideCustomerSupport(userDetails, issue) {
    // Check if user is logged in
    if (!userDetails.isLoggedIn) {
        alert('Please login to access customer support');
        return;
    }

    // Create a support ticket
    let supportTicket = {
        userId: userDetails.id,
        issue: issue,
        status: 'Open',
        response: null
    };

    // Send the support ticket to the server
    fetch('/api/support', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(supportTicket),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your support ticket has been submitted. We will get back to you soon.');
        } else {
            alert('There was an error submitting your support ticket. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Event Listener for Customer Support Form Submission
customerSupportPanel.addEventListener('submit', (event) => {
    event.preventDefault();
    let issue = event.target.elements.issue.value;
    provideCustomerSupport(userDetails, issue);
});
```