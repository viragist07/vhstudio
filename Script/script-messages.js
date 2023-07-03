// Retrieve the messages from local storage
var messages = JSON.parse(localStorage.getItem('messages')) || [];

// Reverse the order of the messages array to show the latest message on top
messages.reverse();

// Display the messages on the page
var messagesContainer = document.getElementById('messagesContainer');
messages.forEach(function(message, index) {
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  var nameParagraph = document.createElement('p');
  nameParagraph.textContent = 'Name: ' + message.name;
  messageDiv.appendChild(nameParagraph);

  var phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = 'Phone: ' + message.phone;
  messageDiv.appendChild(phoneParagraph);

  var messageParagraph = document.createElement('p');
  messageParagraph.textContent = 'Message: ' + message.message;
  messageDiv.appendChild(messageParagraph);

  var timestampParagraph = document.createElement('p');
  timestampParagraph.textContent = 'Timestamp: ' + message.timestamp;
  messageDiv.appendChild(timestampParagraph);

  messagesContainer.appendChild(messageDiv);

  // Add a horizontal line between messages, except for the last message
  if (index !== messages.length - 1) {
    var hr = document.createElement('hr');
    messagesContainer.appendChild(hr);
  }
});
