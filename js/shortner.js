async function shortenUrl(apiKey, currentUrl) {
    const baseUrl = 'https://linkshortify.com/st';
    const requestUrl = `${baseUrl}?api=${apiKey}&url=${encodeURIComponent(currentUrl)}`;

    try {
      const response = await fetch(requestUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to shorten the URL');
      }

      // Handle the shortened URL
      const shortenedUrl = await response.text(); // Assuming the API returns the shortened URL as plain text
      console.log('Shortened URL:', shortenedUrl);

      // Optionally, open the shortened URL in a new tab
      window.open(shortenedUrl, '_blank');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Something went wrong. Please try again.');
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
