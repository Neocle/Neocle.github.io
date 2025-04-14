document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const now = Date.now();
    const lastSent = localStorage.getItem('lastEmailSent');
    const THIRTY_MIN = 30 * 60 * 1000;
  
    if (lastSent && now - parseInt(lastSent) < THIRTY_MIN) {
      showStatusMessage("You can only send one message every 30 minutes.", "error");
      return;
    }
  
    emailjs.sendForm('service_c4lz8zb', 'template_42wkve5', this)
      .then(() => {
        localStorage.setItem('lastEmailSent', now);
        showStatusMessage("Message sent successfully!", "success");
        this.reset();
      }, (error) => {
        showStatusMessage("Error sending message. Please try again later.", "error");
      });
  });
  
  function showStatusMessage(message, type) {
    let existingBar = document.getElementById('status-bar');
    if (existingBar) existingBar.remove();
  
    const bar = document.createElement('div');
    bar.id = 'status-bar';
    bar.textContent = message;
    bar.style.padding = '1rem';
    bar.style.borderRadius = '8px';
    bar.style.marginBottom = '1rem';
    bar.style.textAlign = 'center';
    bar.style.fontWeight = '600';
    bar.style.color = 'white';
  
    if (type === "success") {
      bar.style.backgroundColor = '#4CAF50';
    } else {
      bar.style.backgroundColor = '#e74c3c';
    }
  
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(bar, form);
  
    setTimeout(() => {
      bar.remove();
    }, 5000);
  }
  