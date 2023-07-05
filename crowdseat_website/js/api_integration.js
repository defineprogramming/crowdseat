```javascript
// Importing required dependencies
import axios from 'axios';

// API base URL
const API_BASE_URL = 'https://api.crowdseat.com';

// Function to integrate API
function integrateApi() {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Function to fetch event details
function fetchEventDetails(eventId) {
  return integrateApi().get(`/events/${eventId}`);
}

// Function to fetch venue details
function fetchVenueDetails(venueId) {
  return integrateApi().get(`/venues/${venueId}`);
}

// Function to fetch ticket details
function fetchTicketDetails(ticketId) {
  return integrateApi().get(`/tickets/${ticketId}`);
}

// Function to fetch sponsorship details
function fetchSponsorshipDetails(sponsorshipId) {
  return integrateApi().get(`/sponsorships/${sponsorshipId}`);
}

// Function to fetch fan data
function fetchFanData(userId) {
  return integrateApi().get(`/users/${userId}/fanData`);
}

// Function to fetch VIP package details
function fetchVipPackageDetails(packageId) {
  return integrateApi().get(`/vipPackages/${packageId}`);
}

// Exporting functions
export {
  fetchEventDetails,
  fetchVenueDetails,
  fetchTicketDetails,
  fetchSponsorshipDetails,
  fetchFanData,
  fetchVipPackageDetails
};
```