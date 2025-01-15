async function shortenUrl(apiKey, currentUrl) {
    const baseUrl = 'https://linkshortify.com/st';
    const requestUrl = `${baseUrl}?api=${apiKey}&url=${encodeURIComponent(currentUrl)}`;

    try {
      console.log('Requesting:', requestUrl); // Log the full request URL for debugging

      const response = await fetch(requestUrl, {
        method: 'GET',
      });

      // Check for HTTP errors
      if (!response.ok) {
        console.error('HTTP Error:', response.status, response.statusText);
        throw new Error('Failed to shorten the URL');
      }

      const shortenedUrl = await response.text(); // Adjust this based on the actual API response format
      console.log('Shortened URL:', shortenedUrl);

      // Open the shortened URL in a new tab
      window.open(shortenedUrl, '_blank');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Something went wrong. Please check the console for details.');
    }
  }

  const apiKey = '62719b77623132400c87e567f8b588dadc9b5205'; // Your API key

  document.getElementById('shortenBtn1').addEventListener('click', function () {
    const currentUrl = window.location.href; // Get the current page URL
    shortenUrl(apiKey, currentUrl); // Call the function for Skip 1
  });

  document.getElementById('shortenBtn2').addEventListener('click', function () {
    const currentUrl = window.location.href; // Get the current page URL
    shortenUrl(apiKey, currentUrl); // Call the function for Skip 2
  });
