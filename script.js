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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate progress bars when in view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.Polaris-ProgressBar__Indicator');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe skills section for progress bar animation
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.Polaris-Button');
    buttons.forEach(button => {
        if (button.textContent.includes("Let's Connect") || button.textContent.includes("Send Email")) {
            button.addEventListener('click', (e) => {
                if (!button.href) {
                    e.preventDefault();
                    window.location.href = 'mailto:ddivyanshu@gmail.com';
                }
            });
        }
        
        if (button.textContent.includes("View Experience")) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('#experience').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});