// About page JS
document.addEventListener('DOMContentLoaded', function() {
    // Animate statistics
    animateStatistics();
    
    // Load footer services
    loadFooterServices();

    // Animate mission and vision cards on scroll
    animateMissionVision();
    
    // Function to animate statistics
    function animateStatistics() {
        const clientsCount = document.getElementById('clients-count');
        const loansCount = document.getElementById('loans-count');
        const branchesCount = document.getElementById('branches-count');
        const teamCount = document.getElementById('team-count');
        
        const targetValues = {
            clients: 12500,
            loans: 18750,
            branches: 15,
            team: 85
        };
        
        const duration = 2000; // Animation duration in ms
        const interval = 20; // Update interval in ms
        const steps = duration / interval;
        
        const incrementValues = {
            clients: targetValues.clients / steps,
            loans: targetValues.loans / steps,
            branches: targetValues.branches / steps,
            team: targetValues.team / steps
        };
        
        let currentValues = {
            clients: 0,
            loans: 0,
            branches: 0,
            team: 0
        };
        
        const animate = setInterval(() => {
            currentValues.clients += incrementValues.clients;
            currentValues.loans += incrementValues.loans;
            currentValues.branches += incrementValues.branches;
            currentValues.team += incrementValues.team;
            
            clientsCount.textContent = Math.floor(currentValues.clients).toLocaleString();
            loansCount.textContent = Math.floor(currentValues.loans).toLocaleString();
            branchesCount.textContent = Math.floor(currentValues.branches);
            teamCount.textContent = Math.floor(currentValues.team);
            
            if (currentValues.clients >= targetValues.clients &&
                currentValues.loans >= targetValues.loans &&
                currentValues.branches >= targetValues.branches &&
                currentValues.team >= targetValues.team) {
                clearInterval(animate);
                
                // Set exact target values to avoid rounding issues
                clientsCount.textContent = targetValues.clients.toLocaleString();
                loansCount.textContent = targetValues.loans.toLocaleString();
                branchesCount.textContent = targetValues.branches;
                teamCount.textContent = targetValues.team;
            }
        }, interval);
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

    // Function to animate mission and vision cards on scroll
    function animateMissionVision() {
        const missionVisionSection = document.querySelector('.mission-vision-section');
        const cards = document.querySelectorAll('.mission-vision-card');

        if (!missionVisionSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(missionVisionSection);
                }
            });
        }, { threshold: 0.1 });

        // Initially hide cards
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });

        observer.observe(missionVisionSection);
    }
});