function shortenUrl() {
    const currentUrl = window.location.href;  // Get the current page URL
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';

    // Construct the full URL for shortening
    const finalUrl = baseUrl + encodeURIComponent(currentUrl);  // Properly encode the URL
    console.log("Final URL:", finalUrl);  // Log the final shortened URL

    // Open the shortened URL in a new tab
    window.open(finalUrl, '_blank');
  }

  // Event listener for the first button
  document.getElementById('shortenBtn1').addEventListener('click', function() {
    shortenUrl();  // Call the function when Button 1 is clicked
  });

  // Event listener for the second button
  document.getElementById('shortenBtn2').addEventListener('click', function() {
    shortenUrl();  // Call the function when Button 2 is clicked
  });
