document.getElementById('shortenBtn1').addEventListener('click', function() {
    const currentUrl = encodeURIComponent(window.location.href);  // Encoding the URL properly
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + currentUrl;

    // Open the shortened URL in a new tab for Skip 1
    window.open(finalUrl, '_blank');
  });

  document.getElementById('shortenBtn2').addEventListener('click', function() {
    const currentUrl = encodeURIComponent(window.location.href);  // Encoding the URL properly
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + currentUrl;

    // Open the shortened URL in a new tab for Skip 2
    window.open(finalUrl, '_blank');
  });
