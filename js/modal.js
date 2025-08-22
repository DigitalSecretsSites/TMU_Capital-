document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('terms-modal');
    const termsLinks = document.querySelectorAll('.terms-link');
    const closeBtn = document.querySelector('.close-btn');
    const termsContent = document.getElementById('terms-content');

    if (termsLinks.length > 0) {
        termsLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                fetch('terms.html')
                    .then(response => response.text())
                    .then(data => {
                        termsContent.innerHTML = data;
                        modal.style.display = 'block';
                    })
                    .catch(error => {
                        console.error('Error fetching terms:', error);
                        termsContent.innerHTML = '<p>Could not load the terms and conditions. Please try again later.</p>';
                        modal.style.display = 'block';
                    });
            });
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
