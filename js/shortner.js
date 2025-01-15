 async function shortenUrl() {
      const currentUrl = window.location.href;  // Get the current page URL
      const proxyUrl = 'https://adlinkify-proxy.vercel.app/api/shorten';  // Your Vercel proxy URL

      try {
        // Send the request to the backend
        const response = await fetch(`${proxyUrl}?url=${encodeURIComponent(currentUrl)}`);
        const data = await response.json();

        // Check if the shortened URL is returned
        if (data.shortenedUrl) {
          // Open the shortened URL in a new tab
          window.open(data.shortenedUrl, '_blank');
        } else {
          console.error('Failed to shorten URL');
        }
      } catch (error) {
        console.error('Error shortening URL:', error);
      }
    }

    // Event listener for the first button
    document.getElementById('shortenBtn1').addEventListener('click', function() {
      shortenUrl();  // Call the function when Button 1 is clicked
    });

    // Event listener for the second button
    document.getElementById('shortenBtn2').addEventListener('click', function() {
      shortenUrl();  // Call the function when Button 2 is clicked
    });
