

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Create a new message object with timestamp
  var newMessage = {
    name: name,
    phone: phone,
    message: message,
    timestamp: new Date().toLocaleString() // Adding timestamp using current date and time
  };

  // Retrieve existing messages from local storage
  var existingMessages = JSON.parse(localStorage.getItem('messages')) || [];

// JSON.parse() is a built-in method that allows me to parse a JSON string and convert it into a JavaScript object. 

  // Add the new message to the existing messages array
  existingMessages.push(newMessage);

  // Save the updated messages array to local storage
  localStorage.setItem('messages', JSON.stringify(existingMessages));

  // Reset the form values
  document.getElementById('contactForm').reset();

  // Show the thank you message on the screen
  var thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Thank you for contacting us! We appreciate your message and will get back to you as soon as we can.';
  thankYouMessage.style.fontSize = '36px';
  thankYouMessage.style.color = 'green';
  document.getElementById('contactForm').appendChild(thankYouMessage);
});


//! NEXT LEVEL - I want to get an e-mail when someone leave a message using this form... 