
    document.addEventListener('DOMContentLoaded', function () {
        // Get the referrer URL
        const referrer = document.referrer;

        // Log the referrer for debugging
        console.log('Referrer:', referrer);

        if (referrer) {
            try {
                // Extract the domain from the referrer
                const referrerDomain = new URL(referrer).hostname;

                // List of domains that should trigger the popup
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
        if (popup) {
            console.log('Displaying popup.');
            popup.style.display = 'block';
        } else {
            console.error('Popup element not found.');
        }
    }

    // Function to close the popup
    function closePopup() {
        const popup = document.getElementById('custom-popup');
        if (popup) {
            console.log('Closing popup.');
            popup.style.display = 'none';
        }
    }
