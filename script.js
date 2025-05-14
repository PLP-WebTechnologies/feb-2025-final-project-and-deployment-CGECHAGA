    
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
        
        // Car rental buttons
        const rentButtons = document.querySelectorAll('.rent-btn');
        const bookingModal = document.getElementById('bookingModal');
        const selectedCarText = document.getElementById('selectedCar');
        const closeModal = document.querySelector('.close-modal');
        
        rentButtons.forEach(button => {
            button.addEventListener('click', function() {
                const carModel = this.getAttribute('data-car');
                selectedCarText.textContent = `You've selected: ${carModel}`;
                bookingModal.style.display = 'flex';
            });
        });
        
        closeModal.addEventListener('click', function() {
            bookingModal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                bookingModal.style.display = 'none';
            }
        });
        
        // Form submission
        const rentalForm = document.getElementById('rentalForm');
        const quickBookingForm = document.getElementById('quickBookingForm');
        
        rentalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your booking! We will contact you shortly to confirm your reservation.');
            this.reset();
        });
        
        quickBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your booking has been confirmed! Thank you for choosing CarRent Pro.');
            this.reset();
            bookingModal.style.display = 'none';
        });
        
        // Set minimum date for pickup (today)
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('pickup-date').min = today;
        document.getElementById('quick-pickup-date').min = today;
        
        // Update dropoff date min based on pickup date
        document.getElementById('pickup-date').addEventListener('change', function() {
            document.getElementById('dropoff-date').min = this.value;
        });
        
        document.getElementById('quick-pickup-date').addEventListener('change', function() {
            document.getElementById('quick-dropoff-date').min = this.value;
        });