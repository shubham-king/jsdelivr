document.getElementById('shortenBtn1').addEventListener('click', function () {
    // Ensure current URL is correctly detected
    const currentUrl = window.location.href; // Get the current page URL directly
    console.log("Detected URL:", currentUrl); // Debug: Log the detected URL

    // Construct the final URL
    const encodedUrl = encodeURIComponent(currentUrl); // Encode the dynamic part
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + encodedUrl; // Combine base URL and encoded URL

    // Open the shortened URL in a new tab for Skip 1
    window.open(finalUrl, '_blank');
});

document.getElementById('shortenBtn2').addEventListener('click', function () {
    const currentUrl = window.location.href; // Get the current page URL directly
    console.log("Detected URL:", currentUrl); // Debug: Log the detected URL

    const encodedUrl = encodeURIComponent(currentUrl); // Encode the dynamic part
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + encodedUrl; // Combine base URL and encoded URL

    // Open the shortened URL in a new tab for Skip 2
    window.open(finalUrl, '_blank');
});
