```javascript
// Importing necessary dependencies
import { userDetails, ticketDetails, eventDetails } from './main.js';

// DOM Elements
const purchaseButton = document.getElementById('purchaseButton');

// Function to handle ticket purchase
function purchaseTicket() {
  if (!userDetails.loggedIn) {
    alert('Please log in to purchase tickets.');
    return;
  }

  const selectedTicket = ticketDetails.find(ticket => ticket.selected);
  if (!selectedTicket) {
    alert('Please select a ticket to purchase.');
    return;
  }

  const selectedEvent = eventDetails.find(event => event.id === selectedTicket.eventId);
  if (!selectedEvent) {
    alert('Error: Event not found.');
    return;
  }

  // Simulate payment processing
  setTimeout(() => {
    // Update ticket status
    selectedTicket.purchased = true;
    selectedTicket.userId = userDetails.id;

    // Update user's ticket history
    userDetails.ticketHistory.push(selectedTicket.id);

    // Show success message
    alert(`Successfully purchased ticket for ${selectedEvent.name}!`);

    // Emit purchase success event
    const purchaseSuccessEvent = new CustomEvent('purchaseSuccess', { detail: selectedTicket });
    document.dispatchEvent(purchaseSuccessEvent);
  }, 1000);
}

// Event Listener
purchaseButton.addEventListener('click', purchaseTicket);
```