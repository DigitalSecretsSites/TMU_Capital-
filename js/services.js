// Services page JS
document.addEventListener('DOMContentLoaded', function() {
    // Load services
    loadServices();
    
    
    // Load footer services
    loadFooterServices();
    
    // Function to load services
    function loadServices() {
        const servicesGrid = document.getElementById('services-grid');
        
        // Get services from localStorage or use default
        let services = JSON.parse(localStorage.getItem('services')) || [
            {
                id: 1,
                title: 'Personal Loans',
                description: 'Flexible personal loans tailored to your needs with competitive interest rates. Whether you need funds for home improvements, education, or unexpected expenses, we have a solution for you.',
                image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                id: 2,
                title: 'Emergency Loans',
                description: 'Quick access to funds when you need them most with a fast approval process. Our emergency loans provide financial relief when unexpected situations arise.',
                image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                id: 3,
                title: 'Debt Consolidation',
                description: 'Combine multiple debts into one manageable loan with a lower interest rate. Simplify your finances and reduce your monthly payments.',
                image: 'https://images.pexels.com/photos/4386157/pexels-photo-4386157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                id: 4,
                title: 'Purchase Orders',
                description: 'Get the funding you need to fulfill large customer orders and grow your business with our purchase order financing solutions.',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ];
        
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <div class="service-img">
                    <img src="${service.image}" alt="${service.title}">
                </div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <a href="calculator.html" class="service-link">Apply Now <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
    }
    
    
    // Function to load footer services
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