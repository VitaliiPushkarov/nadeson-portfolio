// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/* Nav */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.navmenu');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
    });
  });

  navOverlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
  });
});
/* Cookie */
document.addEventListener('DOMContentLoaded', function () {
  // Function to create a cookie
  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(cname) === 0) {
              return c.substring(cname.length, c.length);
          }
      }
      return "";
  }

  var cookieBanner = document.getElementById('cookie-banner');
  var acceptCookiesButton = document.getElementById('accept-cookies');
  var declineButton = document.getElementById('decline');

  // Check if the user has already accepted cookies
  if (getCookie("cookies_accepted") !== "true") {
      if (cookieBanner) cookieBanner.style.display = 'block';
  }

  // Handle the accept button click
  if (acceptCookiesButton) {
      acceptCookiesButton.addEventListener('click', function () {
          setCookie("cookies_accepted", "true", 365);
          if (cookieBanner) cookieBanner.style.display = 'none';
      });
  }

  // Handle the decline button click
  if (declineButton) {
      declineButton.addEventListener('click', function () {
          if (cookieBanner) cookieBanner.style.display = 'none';
      });
  }
});
// Accordion
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');
  const contents = document.querySelectorAll('.accordion-content');

  // Function to show the content block
  function showContent(targetContent) {
    contents.forEach(content => {
      content.style.display = 'none';
    });
    targetContent.style.display = 'block';
  }

  // Function to activate the header
  function activateHeader(targetHeader) {
    headers.forEach(header => {
      header.classList.remove('active');
    });
    targetHeader.classList.add('active');
  }

  // Open the first block by default
  if (contents.length > 0) {
    showContent(contents[0]);
    activateHeader(headers[0]);
  }

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      showContent(targetContent);
      activateHeader(this);
    });
  });
});
// Contact Form
document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission

          var email = document.getElementById('email').value;

          // Regular expression for email validation
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailRegex.test(email)) {
              alert("Please enter a valid email address.");
          } else {
              // Redirect to the thank you page
              window.location.href = "thankyou.html";
          }
      });
  }
});
