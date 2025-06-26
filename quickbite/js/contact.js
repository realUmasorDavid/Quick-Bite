document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  alert(`Thank you, ${name}! We've received your message and will contact you at ${email} soon.`);
  
  this.reset();
});