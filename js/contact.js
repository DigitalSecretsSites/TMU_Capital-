// Contact page JS
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contactForm = document.getElementById('contact-form');
    
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