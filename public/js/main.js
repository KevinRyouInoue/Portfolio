// ===================================
// FORMAL PROFESSIONAL PORTFOLIO
// Kevin Ryou Inoue
// ===================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--accent-gold)';
            }
        });
    });
};

// Enhanced navbar on scroll
const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 46, 0.99)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = 'none';
        }
    });
};

// Scroll-based reveal animations
const observeElements = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major content sections
    const elementsToObserve = document.querySelectorAll(
        '.experience-item, .project-item, .skill-group, .education-item, .contact-group'
    );

    elementsToObserve.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
};

// Smooth section transitions
const initSectionTransitions = () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease';
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();
    handleNavbarScroll();
    observeElements();
    initSectionTransitions();
    
    // Add smooth hover effects to skill badges
    const skillBadges = document.querySelectorAll('.skill-badge, .tech-tag');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Professional console message
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #c9a961');
    console.log('%cKevin Ryou Inoue', 'color: #c9a961; font-size: 24px; font-weight: bold; font-family: serif');
    console.log('%cSite Reliability Engineer & Developer', 'color: #b8c1cc; font-size: 14px');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #c9a961');
    console.log('%cBuilt with Node.js & Express', 'color: #8892a0; font-size: 12px; font-style: italic');
});

// Add smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
