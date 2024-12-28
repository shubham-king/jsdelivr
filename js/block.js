document.addEventListener('keydown', function (event) {
      // Block F12
      if (event.key === 'F12') {
          event.preventDefault();
          showCustomNotification('F12 is disabled on this site.');
      }

      // Block Ctrl+U (View Source)
      if (event.ctrlKey && event.key === 'u') {
          event.preventDefault();
          showCustomNotification('Ctrl+U is disabled on this site.');
      }

      // Block Ctrl+Shift+I (DevTools)
      if (event.ctrlKey && event.shiftKey && event.key === 'I') {
          event.preventDefault();
          showCustomNotification('Ctrl+Shift+I is disabled on this site.');
      }
      if (event.ctrlKey && event.key === 'p') {
          event.preventDefault();
          showCustomNotification('Printing is disabled on this site.');
      }

      // Block Ctrl+C (Copy)
      if (event.ctrlKey && event.key === 'c') {
          event.preventDefault();
          showCustomNotification('Copying content is disabled on this site.');
      }

      // Block Ctrl+Shift+C (Inspect Element)
      if (event.ctrlKey && event.shiftKey && event.key === 'C') {
          event.preventDefault();
          showCustomNotification('Ctrl+Shift+C is disabled on this site.');
      }
  });

  document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      showCustomNotification('Right-click is disabled on this site.');
  });

  function showCustomNotification(message) {
      const notification = document.getElementById('custom-notification');
      notification.textContent = message;
      notification.style.display = 'block';

      // Hide the notification after 3 seconds
      setTimeout(() => {
          notification.style.display = 'none';
      }, 3000);
  }
