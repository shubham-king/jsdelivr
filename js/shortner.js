 document.getElementById('shortenBtn1').addEventListener('click', function() {
    const currentUrl = encodeURIComponent(window.location.href);
    const baseUrl = 'https://linkshortify.com/st?api=62719b77623132400c87e567f8b588dadc9b5205&url=';
    const finalUrl = baseUrl + currentUrl;

    // Open the shortened URL in a new tab for Skip 1
    window.open(finalUrl, '_blank');
  });

  document.getElementById('shortenBtn2').addEventListener('click', function() {
    const currentUrl = encodeURIComponent(window.location.href);
    const baseUrl = 'https://modijiurl.com/st?api=ea00541587f4df893ab238587ec4e5c084087172&url=';
    const finalUrl = baseUrl + currentUrl;

    // Open the shortened URL in a new tab for Skip 2
    window.open(finalUrl, '_blank');
  });
