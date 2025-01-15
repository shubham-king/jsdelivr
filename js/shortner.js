async function shortenUrl() {
    const currentUrl = window.location.href;  // Get the current page URL
    const proxyUrl = 'https://adlinkify-proxy.vercel.app/api/shorten';  // Your Vercel proxy URL

    try {
      const response = await fetch(`${proxyUrl}?url=${encodeURIComponent(currentUrl)}`);
      const data = await response.json();

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

  document.getElementById('shortenBtn1').addEventListener('click', shortenUrl);
  document.getElementById('shortenBtn2').addEventListener('click', shortenUrl);
