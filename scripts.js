document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  
    // Dom is loaded and parsed
    const elements = document.querySelectorAll('.content, header h1, header li, .logo');
    elements.forEach(element => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.transition = "opacity 2s, transform 2s";
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
      }, 100);
    });
  
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Login form submitted');
  
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple login validation
        if(username === "hussan" && password === "password123") {
            document.getElementById('loginMessage').textContent = "Login successful! Redirecting to your account...";
            document.getElementById('loginMessage').style.color = "green";
            setTimeout(() => {
                // Redirect to a dummy account page
                window.location.href = "account.html";
            }, 2000);
        } else {
            document.getElementById('loginMessage').textContent = "Invalid username or password.";
        }
      });
    }
  // Brings to back to home page when you logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', function() {
        console.log('Logout button clicked');
        const accountPage = document.querySelector('.container');
        accountPage.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      });
    }
  
    // Redirect to payment page and pre-fill payment amount
    const payButtons = document.querySelectorAll('.payButton');
    payButtons.forEach(button => {
      button.addEventListener('click', function() {
        const amount = this.getAttribute('data-bill');
        console.log('Pay button clicked', amount); // Debug log
        localStorage.setItem('paymentAmount', amount);
        window.location.href = "payment.html";
      });
    });
  
    // Fill payment amount on payment page
    if (window.location.pathname.endsWith('payment.html')) {
      console.log('Payment page loaded');
      const paymentAmountInput = document.getElementById('paymentAmount');
      const paymentAmount = localStorage.getItem('paymentAmount');
      if (paymentAmount && paymentAmountInput) {
        paymentAmountInput.value = `$${paymentAmount}`;
      }
  
      const paymentForm = document.getElementById('paymentForm');
      if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
          e.preventDefault();
          console.log('Payment form submitted');
          // Simulate payment processing...
          setTimeout(() => {
            alert('Payment successful!');
            window.location.href = "account.html";
          }, 1000);
        });
      }
    }
 // Handle scheduling form submission
 const scheduleForm = document.getElementById('scheduleForm');
 if (scheduleForm) {
   scheduleForm.addEventListener('submit', function(e) {
     e.preventDefault();
     const appointmentDate = document.getElementById('appointmentDate').value;
     const appointmentTime = document.getElementById('appointmentTime').value;
     console.log('Appointment scheduled for', appointmentDate, appointmentTime);
     document.getElementById('scheduleMessage').textContent = `Appointment scheduled for ${appointmentDate} at ${appointmentTime}`;
     document.getElementById('scheduleMessage').style.color = "green";
   });
 }
});