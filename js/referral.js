
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

                // Check if the referrer domain matches any in the list
                if (targetDomains.includes(referrerDomain)) {
                    showPopup();
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
