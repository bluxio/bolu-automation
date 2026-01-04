// ============================================
// Mobile Menu Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Smooth Scroll Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 76; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Animations with Intersection Observer
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
const animatedElements = document.querySelectorAll(
    '.service-card, .stat-card, .pilot-card, .info-card, .contact-form-wrapper'
);

animatedElements.forEach(el => {
    observer.observe(el);
});

// ============================================
// Contact Form Submission with Web3Forms
// ============================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Clear previous messages
    formMessage.className = 'form-message';
    formMessage.textContent = '';
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Convert to JSON
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    
    const json = JSON.stringify(object);
    
    try {
        // Submit to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Success
            formMessage.className = 'form-message success';
            formMessage.textContent = '✓ Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
            
            // Reset form
            contactForm.reset();
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            // Error from API
            throw new Error(result.message || 'Something went wrong');
        }
    } catch (error) {
        // Network or other error
        formMessage.className = 'form-message error';
        formMessage.textContent = '✗ Oops! There was an error sending your message. Please try again or contact us directly.';
        
        console.error('Form submission error:', error);
    } finally {
        // Re-enable submit button and remove loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

// ============================================
// Form Field Validation
// ============================================
const formInputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#10b981';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#2563eb';
    });
});

// Email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#ef4444';
    } else if (emailInput.value) {
        emailInput.style.borderColor = '#10b981';
    }
});

// Phone formatting (optional field)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value})`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    
    e.target.value = value;
});

// ============================================
// Log page load
// ============================================
console.log('✨ Bolu Automations - Landing Page Loaded Successfully');
console.log('📍 Serving Allen, TX and surrounding areas');
console.log('⚡ Simple automation solutions for home service businesses');
