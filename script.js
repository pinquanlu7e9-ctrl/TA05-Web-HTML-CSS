/* script.js - JavaScript for interactive functionality */
document.addEventListener('DOMContentLoaded', function() {
  // Dark Mode Toggle
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Check saved theme preference in localStorage
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = 'Light Mode';
    } else {
      themeToggle.textContent = 'Dark Mode';
    }
    // Toggle dark/light mode on click
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      if (document.body.classList.contains('dark-mode')) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode';
      } else {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode';
      }
    });
  }

  // Back to Top Button
  var backToTopBtn = document.getElementById('back-to-top');
  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  // Scroll to top when the button is clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact Form Validation and Submission
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Get form field values
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
      var nameValue = nameInput.value.trim();
      var emailValue = emailInput.value.trim();
      var messageValue = messageInput.value.trim();
      // Reset previous error styles
      nameInput.style.border = "1px solid #ccc";
      emailInput.style.border = "1px solid #ccc";
      messageInput.style.border = "1px solid #ccc";
      // Simple validation checks
      var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (nameValue === "") {
        alert("Please enter your name.");
        nameInput.style.border = "2px solid red";
        return;
      }
      if (emailValue === "") {
        alert("Please enter your email address.");
        emailInput.style.border = "2px solid red";
        return;
      }
      if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        emailInput.style.border = "2px solid red";
        return;
      }
      if (messageValue === "") {
        alert("Please enter your message.");
        messageInput.style.border = "2px solid red";
        return;
      }
      // If all fields are valid, simulate form submission
      contactForm.style.display = 'none';
      var successMsg = document.getElementById('success-message');
      if (successMsg) {
        successMsg.classList.remove('hidden');
      }
      // Optionally, we could also display an alert for confirmation
      // alert("Message sent successfully!");
    });
  }

  // "Read more" Toggle for Introduction (on homepage)
  var toggleMoreLink = document.getElementById('toggle-more');
  if (toggleMoreLink) {
    var moreText = document.getElementById('more-text');
    toggleMoreLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (moreText.classList.contains('hidden')) {
        // Show the additional text
        moreText.classList.remove('hidden');
        toggleMoreLink.textContent = "Read less";
      } else {
        // Hide the additional text
        moreText.classList.add('hidden');
        toggleMoreLink.textContent = "Read more";
      }
    });
  }
});
