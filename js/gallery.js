document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Set animation delays for gallery items
    galleryItems.forEach((item, index) => {
        // Ensure each item has its own delay for the staggered effect
        item.style.animationDelay = `${0.1 * index}s`;
    });
    
    // Filter gallery items by category
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    // Reset animation
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'staggerFadeIn 0.5s ease forwards';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Open lightbox when clicking on gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('h4').textContent;
            const description = item.querySelector('p').textContent;
            
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = `${title} - ${description}`;
            lightbox.classList.add('active');
            
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add hover effect to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.gallery-overlay');
            overlay.style.transform = 'translateY(100%)';
        });
    });
});