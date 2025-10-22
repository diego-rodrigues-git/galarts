// Banner Slider
document.addEventListener('DOMContentLoaded', function() {
    // Banner slider functionality
    const bannerContainer = document.querySelector('.banner-container');
    const dots = document.querySelectorAll('.banner-dot');
    
    if (bannerContainer && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active dot
                document.querySelector('.banner-dot.active').classList.remove('active');
                dot.classList.add('active');
                
                // Slide to the corresponding image
                bannerContainer.style.transform = `translateX(-${index * 100}%)`;
            });
        });
        
        // Auto slide every 5 seconds
        let currentSlide = 0;
        const totalSlides = dots.length;
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Update active dot
            document.querySelector('.banner-dot.active').classList.remove('active');
            dots[currentSlide].classList.add('active');
            
            // Slide to the next image
            bannerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000);
    }
    
    // Product detail page image gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update active thumbnail
                document.querySelector('.thumbnail.active')?.classList.remove('active');
                thumbnail.classList.add('active');
                
                // Update main image
                mainImage.src = thumbnail.src;
            });
        });
    }
    
    // Quantity buttons functionality
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const quantityInput = document.querySelector('.quantity input');
    
    if (quantityBtns.length > 0 && quantityInput) {
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let currentQuantity = parseInt(quantityInput.value);
                
                if (btn.textContent === '+') {
                    quantityInput.value = currentQuantity + 1;
                } else if (btn.textContent === '-' && currentQuantity > 1) {
                    quantityInput.value = currentQuantity - 1;
                }
            });
        });
    }
    
    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (!emailInput.value.trim()) {
                alert("Por favor, insira seu e-mail.");
                return;
            }
            
            if (!isValidEmail(emailInput.value)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }
            
            alert("Obrigado por se inscrever na nossa newsletter!");
            this.reset();
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
