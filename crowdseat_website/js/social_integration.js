```javascript
// Social Integration Module

// Importing required dependencies
import { userDetails, eventDetails } from './main.js';

// Function to share event on social media
function shareEvent(eventId) {
    let event = eventDetails.find(event => event.id === eventId);
    if (!event) {
        console.error('Event not found');
        return;
    }

    // Simulate sharing on social media
    console.log(`${userDetails.name} shared ${event.name} on social media`);
    // TODO: Integrate with actual social media APIs

    // Emit shareSuccess message
    let event = new CustomEvent('shareSuccess', { detail: { user: userDetails, event: event } });
    document.dispatchEvent(event);
}

// Function to see which friends are going to an event
function seeFriendsGoing(eventId) {
    let event = eventDetails.find(event => event.id === eventId);
    if (!event) {
        console.error('Event not found');
        return;
    }

    // Simulate fetching friends list
    let friends = ['John Doe', 'Jane Doe', 'Bob Builder'];
    console.log(`Friends going to ${event.name}: ${friends.join(', ')}`);
    // TODO: Integrate with actual social media APIs
}

// Event listener for socialShareButton
document.getElementById('socialShareButton').addEventListener('click', function() {
    let eventId = this.getAttribute('data-event-id');
    shareEvent(eventId);
});

// Exporting functions for other modules
export { shareEvent, seeFriendsGoing };
```