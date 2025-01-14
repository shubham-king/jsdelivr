document.addEventListener('DOMContentLoaded', function () {
    // Get the referrer URL
    const referrer = document.referrer;

    console.log('Referrer:', referrer); // Debug log

    if (referrer) {
        try {
            // Extract the domain from the referrer
            let referrerDomain = new URL(referrer).hostname;

            // Remove "www." if it exists
            referrerDomain = referrerDomain.replace(/^www\./, '');

            console.log('Normalized Referrer Domain:', referrerDomain); // Debug log

            // List of domains that should trigger the popup (normalized)
            const targetDomains = ['animetamil.org', 'anotherdomain.com'];

            // Check if the referrer domain matches any in the list and if the cookie has not been set
            if (targetDomains.includes(referrerDomain) && !hasSeenPopup()) {
                showPopup();
                setPopupCookie(); // Set the cookie after showing the popup
            }
        } catch (error) {
            console.error('Error parsing the referrer URL:', error);
        }
    } else {
        console.log('No referrer information available.');
    }
});

// Function to display the popup
function showPopup() {
    const popup = document.getElementById('custom-popup');
    const overlay = document.getElementById('popup-overlay');
    if (popup && overlay) {
        console.log('Displaying popup.'); // Debug log
        popup.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        console.error('Popup element or overlay not found.');
    }
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('custom-popup');
    const overlay = document.getElementById('popup-overlay');
    if (popup && overlay) {
        console.log('Closing popup.'); // Debug log
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Check if the popup cookie exists and is within the 24-hour timeframe
function hasSeenPopup() {
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)popupSeen\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookie) {
        const cookieDate = new Date(cookie);
        const currentDate = new Date();
        // Check if 24 hours have passed
        return currentDate - cookieDate < 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    }
    return false;
}

// Set a cookie to track when the popup was shown
function setPopupCookie() {
    const currentDate = new Date();
    document.cookie = `popupSeen=${currentDate.toUTCString()}; path=/; max-age=${24 * 60 * 60}`; // Expires in 24 hours
}
