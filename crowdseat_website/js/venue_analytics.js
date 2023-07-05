```javascript
// Importing required dependencies
import { venueDetails, EventSchema, VenueSchema } from './main.js';

// Function to analyze venue data
function analyzeVenueData(venueId) {
    let venue = venueDetails.find(venue => venue.id === venueId);
    let events = EventSchema.find(event => event.venueId === venueId);

    let totalSeats = venue.seats;
    let soldSeats = events.reduce((total, event) => total + event.soldTickets, 0);
    let revenue = events.reduce((total, event) => total + event.revenue, 0);

    let analyticsData = {
        totalSeats: totalSeats,
        soldSeats: soldSeats,
        unsoldSeats: totalSeats - soldSeats,
        revenue: revenue,
        occupancyRate: (soldSeats / totalSeats) * 100,
        revenuePerSeat: revenue / soldSeats
    };

    return analyticsData;
}

// Function to update venue analytics panel
function updateVenueAnalyticsPanel(venueId) {
    let analyticsData = analyzeVenueData(venueId);

    document.getElementById('analyticsPanel').innerHTML = `
        <h2>Venue Analytics</h2>
        <p>Total Seats: ${analyticsData.totalSeats}</p>
        <p>Sold Seats: ${analyticsData.soldSeats}</p>
        <p>Unsold Seats: ${analyticsData.unsoldSeats}</p>
        <p>Total Revenue: $${analyticsData.revenue.toFixed(2)}</p>
        <p>Occupancy Rate: ${analyticsData.occupancyRate.toFixed(2)}%</p>
        <p>Revenue per Seat: $${analyticsData.revenuePerSeat.toFixed(2)}</p>
    `;
}

// Event listener for venue update
document.addEventListener('venueUpdate', (event) => {
    updateVenueAnalyticsPanel(event.detail.venueId);
});
```