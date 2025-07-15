
// Token price update functionality
function updateTokenPrice() {
    // Simulate price update (in real app, this would fetch from API)
    const price = (Math.random() * 0.01 + 0.125).toFixed(6);
    document.getElementById('token-price').textContent = `$${price}`;
}

// Bridge functionality
function bridgeTokens() {
    const fromChain = document.getElementById('fromChain').value;
    const toChain = document.getElementById('toChain').value;
    const amount = document.getElementById('amount').value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    if (fromChain === toChain) {
        alert('Please select different chains for bridging');
        return;
    }
    
    // Simulate bridge transaction
    alert(`Bridging ${amount} wUSDT from ${fromChain} to ${toChain}...`);
    
    // Reset form
    document.getElementById('amount').value = '';
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle (basic implementation)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Update token price every 30 seconds
    updateTokenPrice();
    setInterval(updateTokenPrice, 30000);
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = '#fff';
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.stat-card, .chain-card, .team-member');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.stat-card, .chain-card, .team-member');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
