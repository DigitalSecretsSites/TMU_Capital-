// Chatbot functionality
// Chatbot functionality
document.addEventListener('DOMContentLoaded', function () {
    const chatbotTrigger = document.querySelector('.chatbot-trigger');
    const chatbotWidget = document.querySelector('.chatbot-widget');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('chatbot-user-input');
    const sendBtn = document.getElementById('chatbot-send');

    // Toggle chatbot visibility
    chatbotTrigger.addEventListener('click', function () {
        chatbotWidget.classList.toggle('active');
    });

    chatbotClose.addEventListener('click', function () {
        chatbotWidget.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';

        // Process message and generate bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }

    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter key
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', sender);
        messageElement.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageElement);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot response based on user input
    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello there! How can I assist you today?";
        }

        // Loan application
        if (lowerMessage.includes('apply') || lowerMessage.includes('loan') || lowerMessage.includes('application')) {
            return "To apply for a loan, please visit our Loan Calculator page to see repayment estimates, then fill out the application form. We offer Personal Loans, Emergency Loans, and Debt Consolidation.";
        }

        // Interest rates
        if (lowerMessage.includes('interest') || lowerMessage.includes('rate')) {
            return "Our standard interest rate is 30% per annum, but we have a special offer for Personal Loans at 25%! Rates can vary, so please use our Loan Calculator for a personalized estimate.";
        }

        // Requirements
        if (lowerMessage.includes('requirement') || lowerMessage.includes('need') || lowerMessage.includes('document')) {
            return "For most loan applications, you'll need: 1) A valid ID, 2) Proof of income (payslips or bank statements), 3) Proof of residence, and 4) A completed application form. Purchase Order financing may have different requirements.";
        }

        // Contact
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            return "You can reach us at: Phone: +264 85 218 3350, Email: tmuinvestment@outlook.com, or visit our office at Independence Avenue, Windhoek. Our working hours are Mon-Fri, 8:00-17:00.";
        }

        // Repayment
        if (lowerMessage.includes('repay') || lowerMessage.includes('payment') || lowerMessage.includes('installment')) {
            return "Repayments can be made via bank transfer, direct debit, or at our offices. We offer flexible repayment terms from 6 to 60 months depending on the loan type and amount.";
        }

        // Default response
        return "I'm sorry, I didn't understand that. You can ask me about our services (Personal Loans, Emergency Loans, Debt Consolidation, Purchase Orders), interest rates, application requirements, or contact information.";
    }

    // Initialize with welcome message if no previous messages
    if (!localStorage.getItem('chatbotInitialized')) {
        addMessage("Hello! I'm the TMU Cash Loan Assistant. How can I help you today?", 'bot');
        localStorage.setItem('chatbotInitialized', 'true');
    }
});