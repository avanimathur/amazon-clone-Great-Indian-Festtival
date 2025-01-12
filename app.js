// Chatbot and background functionality
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotBackground = document.getElementById('chatbot-background');
const closeChat = document.getElementById('close-chat');
const userInput = document.getElementById('user-input');
const sendMessage = document.getElementById('send-message');
const chatbotMessages = document.getElementById('chatbot-messages');

// Open chatbot window
chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = 'block';
    chatbotBackground.style.display = 'block';
});

// Close chatbot window
closeChat.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotBackground.style.display = 'none';
});

// Handle user message send on button click or Enter key
sendMessage.addEventListener('click', sendMessageHandler);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessageHandler();
});

// Handle predefined question click
function handlePredefinedQuestion(question) {
    let userMessage = '';
    if (question === 'order') userMessage = 'How can I track my order?';
    else if (question === 'returns') userMessage = 'How can I initiate returns?';
    else if (question === 'payment') userMessage = 'How can I update payment methods?';
    else if (question === 'address') userMessage = 'How can I update my address?';
    
    if (userMessage) {
        displayMessage(userMessage, 'user');
        chatbotResponse(userMessage);
    }
}

// Send message handler
function sendMessageHandler() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        userInput.value = '';
        chatbotResponse(userMessage);
    }
}

// Display message in the chatbot window
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Simulate typing effect before bot response
function showTypingIndicator() {
    const typingElement = document.createElement('div');
    typingElement.classList.add('message', 'bot');
    typingElement.textContent = 'Typing...';
    chatbotMessages.appendChild(typingElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return typingElement;
}

// Chatbot responses
function chatbotResponse(query) {
    const lowerQuery = query.toLowerCase();
    let response = '';

    // Greetings Handling
    if (['hi', 'hello', 'hey'].includes(lowerQuery)) {
        response = 'Hello! How can I assist you today? 😊';
    }
    // Predefined questions
    else if (lowerQuery.includes('order')) response = 'You can track your orders under the "Your Orders" section.';
    else if (lowerQuery.includes('returns')) response = 'You can initiate returns and refunds from the "Returns and Refunds" section.';
    else if (lowerQuery.includes('payment')) response = 'You can manage your payment methods in the "Payment Settings" section.';
    else if (lowerQuery.includes('address')) response = 'You can update your address in the "Manage Addresses" section.';
    else response = "I'm not sure how to help with that. Could you clarify your question? 🤖";

    // Show typing effect before responding
    const typingIndicator = showTypingIndicator();
    setTimeout(() => {
        chatbotMessages.removeChild(typingIndicator);
        displayMessage(response, 'bot');
    }, 1500); // Typing effect duration
}

// Default message from bot on page load
window.onload = function () {
    displayMessage('Welcome! How can I assist you today?', 'bot');
};

// Add scrollable effect for chatbot messages
chatbotMessages.style.overflowY = 'scroll';
chatbotMessages.style.maxHeight = '400px';


const right=document.querySelector(".right-btn");
right.addEventListener("click",function(event){
const conent=document.querySelector(".slide-carousel");
conent.scrollLeft+=1100;
event.preventDefault();
})
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownItems = document.querySelectorAll('.dropdown-content a');

dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLanguage = item.innerHTML;
        dropdownButton.innerHTML = selectedLanguage;
    });
});


const left=document.querySelector(".left-btn");
left.addEventListener("click",function(event){
const conent=document.querySelector(".slide-carousel");
conent.scrollLeft-=1100;
event.preventDefault();
})
document.addEventListener('DOMContentLoaded', function() {
    const updateLocationButton = document.querySelector(".update-location");

    updateLocationButton.addEventListener('click', function(event) {
        getLocation();
    });
});
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = 'yourAPIKey';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const components = data.results[0].components;
                const city = components.city || components.town || components.village || "Unknown City";
                document.querySelector(".location-name").innerText = `Deliver to ${city}`;
            } else {
                console.error("No results found for the given coordinates.");
                alert("Unable to retrieve location details.");
            }
        })
        .catch(error => {
            console.error("Error fetching location:", error);
            alert("Unable to retrieve location.");
        });
}

const toTopButton = document.querySelector('.backtotop');

toTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
