function getUrlWithoutProtocol(url) {
    return url.replace(/^https?:\/\//, ''); // Remove 'http://' or 'https://'
  }

  document.getElementById('shortenBtn1').addEventListener('click', function() {
    const currentUrl = getUrlWithoutProtocol(window.location.href);
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + encodeURIComponent(currentUrl);

    // Open the shortened URL in a new tab for Skip 1
    window.open(finalUrl, '_blank');
  });

  document.getElementById('shortenBtn2').addEventListener('click', function() {
    const currentUrl = getUrlWithoutProtocol(window.location.href);
    const baseUrl = 'https://arolinks.com/st?api=2527480de7d23ead092b57acf970c96b770c1a6f&url=';
    const finalUrl = baseUrl + encodeURIComponent(currentUrl);

    // Open the shortened URL in a new tab for Skip 2
    window.open(finalUrl, '_blank');
  });
