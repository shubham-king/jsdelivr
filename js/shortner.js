document.getElementById('shortenBtn1').addEventListener('click', function() {
    const currentUrl = window.location.href;  // Get the current URL
    const url = new URL(currentUrl); // Create a URL object
    const formattedUrl = url.hostname + url.pathname; // Extract hostname and pathname

    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + formattedUrl;

    // Open the shortened URL in a new tab for Skip 1
    window.open(finalUrl, '_blank');
});

document.getElementById('shortenBtn2').addEventListener('click', function() {
    const currentUrl = window.location.href;  // Get the current URL
    const url = new URL(currentUrl); // Create a URL object
    const formattedUrl = url.hostname + url.pathname; // Extract hostname and pathname

    const baseUrl = 'https://arolinks.com/st?api=2527480de7d23ead092b57acf970c96b770c1a6f&url=';
    const finalUrl = baseUrl + formattedUrl;

    // Open the shortened URL in a new tab for Skip 2
    window.open(finalUrl, '_blank');
});
