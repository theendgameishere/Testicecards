document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Scroll-Triggered Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after animation to save resources
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- Image Lazy Loading ---
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    // The 'src' is already set, the browser handles it natively
                    // You could add custom logic here if needed
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    }

    // --- Interactive Card Functionality for Mobile (if needed) ---
    // This example uses hover for desktop. For mobile, a tap can expand content.
    // The current design is simple, but this is where you'd add "tappable" logic.
    const cards = document.querySelectorAll('.info-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // On mobile, this click event can be used to show more details
            // For this design, we'll just let the link handle the action.
            const cta = this.querySelector('.card-cta');
            if (cta && e.target !== cta) {
                // If the user didn't click the link directly, we can trigger it.
                // cta.click(); 
            }
        });
    });

    // --- Contact Form Submission (Placeholder) ---
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would integrate with an email service like EmailJS, Formspree,
        // or a custom backend endpoint.
        alert('Thank you for your message! Form submission is currently a placeholder.');
        this.reset();
    });

});
