// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    
    loginForm.addEventListener('submit', (event) => {
        const emailValue = emailInput.value.trim();
        
        // Regex for email and phone validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number
        
        if (!emailRegex.test(emailValue) && !phoneRegex.test(emailValue)) {
            // Show error message
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please enter a valid email or phone number.';
            
            // Prevent form submission
            event.preventDefault();
        } else {
            // Hide error message if valid
            errorMessage.style.display = 'none';
        }
    });
});
