// Replace with your actual URL shortening base API URL
  const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';

  // Add the CORS proxy URL
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  function shortenUrl() {
    const currentUrl = encodeURIComponent(window.location.href); // Get the current URL and encode it
    const finalUrl = baseUrl + currentUrl;
    const proxyUrl = corsProxyUrl + finalUrl; // Append the CORS proxy URL

    // Send the request to the shortened URL using fetch
    fetch(proxyUrl, {
      method: 'GET', // Use GET or POST based on the API requirements
      headers: {
        'X-Requested-With': 'XMLHttpRequest', // Optional header to make the request valid
      }
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns the shortened URL
      console.log('Shortened URL:', data.shortenedUrl);
      window.open(data.shortenedUrl, '_blank');
    })
    .catch(error => {
      console.error('Error shortening URL:', error);
    });
  }

  // Event listeners for buttons
  document.getElementById('shortenBtn1').addEventListener('click', shortenUrl);
  document.getElementById('shortenBtn2').addEventListener('click', shortenUrl);
