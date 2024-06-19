//smooth transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//navbar
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-center li');

  function changeActiveLink() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  changeActiveLink();
  window.addEventListener('scroll', changeActiveLink);
});


// JavaScript to trigger typing animation after page load
document.addEventListener('DOMContentLoaded', function(event) {
  var element = document.getElementById('typing-header');
  element.classList.add('typing');
});


//projects
document.querySelectorAll('.project-h h2').forEach(item => {
  item.addEventListener('click', event => {
    // Remove gradient classes from all headings and links
    document.querySelectorAll('.project-h h2').forEach(h2 => h2.classList.remove('gradient-text'));
    document.querySelectorAll('.project-content a').forEach(link => link.classList.remove('gradient-link'));

    // Hide all project contents and images
    document.querySelectorAll('.project-content.active').forEach(content => {
      content.classList.remove('active');
      content.style.opacity = 0;
      content.style.maxHeight = '0';
      setTimeout(() => content.style.display = 'none', 80); // Transition duration matches CSS
    });
    document.querySelectorAll('.project-image img.active').forEach(img => {
      img.classList.remove('active');
      img.style.opacity = 0;
    });

    // Show the clicked project's content and corresponding image
    const targetId = item.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    const targetImage = document.getElementById('projectImage' + targetId.replace('project', ''));

    targetContent.style.display = 'block'; // Ensure it's set to block before applying the active class
    setTimeout(() => {
      targetContent.style.maxHeight = '1000px'; // Arbitrarily large value to allow full content to show
      targetContent.style.opacity = 1;
      targetContent.classList.add('active');
    }, 5); // Slight delay to allow the display change to take effect

    setTimeout(() => {
      targetImage.style.opacity = 1;
      targetImage.classList.add('active');
    }, 15); // Slight delay to ensure smooth transition

    // Add gradient classes to the clicked heading and the corresponding "Learn more" link
    item.classList.add('gradient-text');
    targetContent.querySelector('a').classList.add('gradient-link');
  });
});

// Show the first projects's content and image by default
const firstContent = document.querySelector('.project-content');
const firstImage = document.querySelector('.project-image img');
firstContent.style.display = 'block';
firstContent.style.maxHeight = '1000px';
firstContent.style.opacity = 1;
firstContent.classList.add('active');
firstImage.style.opacity = 1;
firstImage.classList.add('active');

// Add gradient class to the first heading and the corresponding "Learn more" link by default
document.querySelector('.project-h h2').classList.add('gradient-text');
firstContent.querySelector('a').classList.add('gradient-link');


//contact form
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Send email using EmailJS
      emailjs.sendForm('service_dxppz0g', 'template_r7dn8aq', this)
        .then(function(response) {
          console.log('Email sent successfully!', response);
          alert('Your message has been sent successfully!');
          resetForm(); // Reset form after successful submission
        }, function(error) {
          console.error('Failed to send email. Error:', error);
          alert('Oops! An error occurred and we could not send your message. Please try again later.');
        });
    });
  
    function resetForm() {
      document.getElementById('contact-form').reset(); // Reset form fields
    }
  });

  