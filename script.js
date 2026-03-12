// Form handling for lead capture
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (name && email && /\S+@\S+\.\S+/.test(email)) {
            // Store lead in localStorage (simulate backend)
            const leads = JSON.parse(localStorage.getItem('leads') || '[]');
            leads.push({ name, email, timestamp: new Date().toISOString() });
            localStorage.setItem('leads', JSON.stringify(leads));
            
            // Show success
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to success
            successMessage.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Por favor, preencha nome e email válidos.');
        }
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    setInterval(showNextTestimonial, 4000);

    // Smooth scroll for anchor links (if added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

