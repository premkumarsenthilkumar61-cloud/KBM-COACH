// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '15px 0';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Portfolio Filtering
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Set initial styles for portfolio items
portfolioItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
    item.style.opacity = '1';
    item.style.transform = 'scale(1)';
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll(
    '.service-card, .portfolio-item, .process-step, .why-card, .testimonial-card, .contact-card, .about-image, .about-text'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===========================
// Counter Animation for Stats
// ===========================
const counters = document.querySelectorAll('.stat-item h4, .badge-number');
let counterAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = counter.innerText;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        
        if (!numericValue) return;
        
        const suffix = target.replace(/[0-9]/g, '');
        const duration = 2000;
        const step = numericValue / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < numericValue) {
                counter.innerText = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = numericValue + suffix;
            }
        };
        
        updateCounter();
    });
};

// Trigger counter animation when about section is in view
const aboutSection = document.querySelector('.about');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            animateCounters();
            counterAnimated = true;
        }
    });
}, { threshold: 0.3 });

if (aboutSection) {
    counterObserver.observe(aboutSection);
}

// ===========================
// Active Navigation on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Form Validation (if contact form is added)
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
        
        // If validation passes, show success message
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}

// ===========================
// Print Optimization
// ===========================
window.addEventListener('beforeprint', () => {
    // Expand all sections before printing
    portfolioItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
    });
});

// ===========================
// Lazy Loading Images (Performance)
// ===========================
const images = document.querySelectorAll('img[src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ===========================
// Prevent Right-Click on Images (Optional)
// ===========================
// Uncomment if you want to protect images
/*
const portfolioImages = document.querySelectorAll('.portfolio-image img');
portfolioImages.forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
*/

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Touch/Swipe Support for Mobile Portfolio
// ===========================
let touchStartX = 0;
let touchEndX = 0;

const portfolioSection = document.querySelector('.portfolio-grid');

if (portfolioSection) {
    portfolioSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    portfolioSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Add swipe behavior if needed
        // For now, just a subtle interaction
        portfolioSection.style.transform = 'scale(0.98)';
        setTimeout(() => {
            portfolioSection.style.transform = 'scale(1)';
        }, 200);
    }
}

// ===========================
// WhatsApp Click Tracking
// ===========================
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // You can add analytics tracking here
    });
});

// ===========================
// Console Branding
// ===========================
console.log('%c KBM COACH Bus Body Builders ', 'background: #ff6b35; color: #fff; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Crafting Excellence in Vehicle Body Building ', 'background: #004e89; color: #fff; font-size: 14px; padding: 5px;');
console.log('%c Website developed with ❤️ ', 'color: #ff6b35; font-size: 12px;');
