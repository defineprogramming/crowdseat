```javascript
// Mobile Responsive JavaScript

// Function to check if the device is mobile
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// Function to adjust the layout for mobile devices
function adjustForMobile() {
    if (isMobileDevice()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

// Event listener for window resize
window.addEventListener('resize', adjustForMobile);

// Initial call to adjust layout for mobile
adjustForMobile();
```