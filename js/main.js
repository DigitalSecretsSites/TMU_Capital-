// Main JavaScript
// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) {
            newIndex = testimonials.length - 1;
        }
        showTestimonial(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    });

    // Auto rotate testimonials
    setInterval(() => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        showTestimonial(newIndex);
    }, 5000);

    // Load services preview
    loadServicesPreview();

    // Load footer services
    loadFooterServices();
});

// Load services preview
function loadServicesPreview() {
    const servicesContainer = document.getElementById('services-preview');
    
    // Get services from localStorage or use default
    let services = JSON.parse(localStorage.getItem('services')) || [
        {
            id: 1,
            title: 'Personal Loans',
            description: 'Flexible personal loans tailored to your needs with competitive interest rates.',
            image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            title: 'Emergency Loans',
            description: 'Quick access to funds when you need them most with a fast approval process.',
            image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            title: 'Debt Consolidation',
            description: 'Combine multiple debts into one manageable loan with a lower interest rate.',
            image: 'https://images.pexels.com/photos/4386157/pexels-photo-4386157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    // Display only 3 services for preview
    const previewServices = services.slice(0, 3);
    
    servicesContainer.innerHTML = previewServices.map(service => `
        <div class="service-card">
            <div class="service-img">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="services.html" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Load footer services
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});