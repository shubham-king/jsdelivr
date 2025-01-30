 
        const specialDomains = ["lksfy.com", "animetamil.org"];

        // Function to check if the referrer is from a special domain
        function isFromSpecialDomain(referrer, domains) {
            return domains.some(domain => referrer.includes(domain));
        }

        // Function to show the popup
        function showPopup() {
            document.getElementById('customPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        // Function to hide the popup
        function hidePopup() {
            document.getElementById('customPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        // Function to block an element
        function blockElement(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.display = 'none'; // Hide the element
            }
        }

        // Function to set a cookie
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Function to get a cookie
        function getCookie(name) {
            const cookieName = name + "=";
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.indexOf(cookieName) === 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return "";
        }

        // Check if the user came from a special domain
        const referrer = document.referrer;
        if (isFromSpecialDomain(referrer, specialDomains)) {
            // Show the popup if the cookie is not set
            if (getCookie('popupShown') !== 'true') {
                showPopup();
                setCookie('popupShown', 'true', 1); // Set cookie for 1 day
            }

            // Block the element
            blockElement('blockedElement');
        }

        // Close the popup when the close button is clicked
        document.getElementById('closePopup').addEventListener('click', hidePopup);

        // Close the popup when clicking outside of it
        document.getElementById('overlay').addEventListener('click', hidePopup);

