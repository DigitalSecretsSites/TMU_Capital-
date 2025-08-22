// Calculator JS
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loanAmountInput = document.getElementById('loan-amount');
    const loanTermInput = document.getElementById('loan-term');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultAmount = document.getElementById('result-amount');
    const resultInterest = document.getElementById('result-interest');
    const resultLevy = document.getElementById('result-levy');
    const resultDuty = document.getElementById('result-duty');
    const resultTotal = document.getElementById('result-total');
    const applicationForm = document.getElementById('application-form');
    const loanApplication = document.getElementById('loan-application');
    const thankYouSection = document.getElementById('thank-you');
    
    // Calculate loan details
    function calculateLoan() {
        const amount = parseFloat(loanAmountInput.value);
        const term = 1; // Loan term is fixed at 1 month
        
        if (isNaN(amount) || amount < 1000) {
            alert('Please enter a valid loan amount. Minimum is N$1000.');
            return;
        }
        
        // Calculate fees
        const interest = amount * 0.30; // 30% interest
        const levy = amount * 0.0103;   // 1.03% NAMFISA levy
        const duty = 5.00;             // Flat stamp duty
        const total = amount + interest + levy + duty;
        
        // Update results
        resultAmount.textContent = `N$ ${amount.toFixed(2)}`;
        resultInterest.textContent = `N$ ${interest.toFixed(2)}`;
        resultLevy.textContent = `N$ ${levy.toFixed(2)}`;
        resultDuty.textContent = `N$ ${duty.toFixed(2)}`;
        resultTotal.textContent = `N$ ${total.toFixed(2)}`;
        
        // Show application form
        applicationForm.style.display = 'block';
        setTimeout(() => {
            applicationForm.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    
    
    // Event listeners
    calculateBtn.addEventListener('click', calculateLoan);
    
    // Load footer services
    loadFooterServices();
    
    // Function to load footer services (same as in main.js)
    function loadFooterServices() {
        const footerServices = document.getElementById('footer-services');
        
        // Get services from localStorage or use default
        let services = JSON.parse(localStorage.getItem('services')) || [
            { id: 1, title: 'Personal Loans' },
            { id: 2, title: 'Emergency Loans' },
            { id: 3, title: 'Debt Consolidation' },
            { id: 4, title: 'Purchase Orders' }
        ];
        
        // Display only 5 services in footer
        const previewServices = services.slice(0, 5);
        
        footerServices.innerHTML = previewServices.map(service => `
            <li><a href="services.html">${service.title}</a></li>
        `).join('');
    }
});