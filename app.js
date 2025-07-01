// Data arrays
const loveReasons = [
    "Porque tu sonrisa ilumina mis días",
    "Por tu inteligencia y creatividad",
    "Porque cuidas el planeta como mi corazón", 
    "Por tu dedicación en el trabajo",
    "Porque eres mi compañera maravillosa con Dios en medio",
    "Por tu pasión por la sostenibilidad",
    "Porque haces que cada día sea especial",
    "Por tu manera de ver la vida",
    "Porque eres simplemente increíble",
    "Porque te quiero infinitamente"
];

const compliments = [
    "Eres más bella que un proyecto de energía renovable ☀️",
    "Tu inteligencia brilla más que cualquier bombillo LED 💡",
    "Eres la mejor implementación de recursos humanos 👩‍💼",
    "Tu sonrisa es más sostenible que cualquier iniciativa verde 🌱", 
    "Eres mi proyecto favorito 💻",
    "Linda, eres más eficiente que un sistema optimizado ⚡",
    "Tu cariño es más renovable que la energía solar 🌞",
    "Me siento muy afortunado por estar contigo 💖"
];

// DOM elements
const loveCounter = document.getElementById('loveCounter');
const loveReason = document.getElementById('loveReason');
const incrementBtn = document.getElementById('incrementBtn');
const qualityCards = document.querySelectorAll('.quality-card');
const qualityMessage = document.getElementById('qualityMessage');
const randomCompliment = document.getElementById('randomCompliment');
const complimentBtn = document.getElementById('complimentBtn');

// State
let currentReasonIndex = 0;

// Love counter functionality
incrementBtn.addEventListener('click', function() {
    currentReasonIndex = (currentReasonIndex + 1) % loveReasons.length;
    const newCounter = currentReasonIndex + 1;
    
    // Update counter with animation
    loveCounter.style.transform = 'scale(1.2)';
    loveCounter.style.color = '#FFC107';
    
    setTimeout(() => {
        loveCounter.textContent = newCounter;
        loveReason.textContent = loveReasons[currentReasonIndex];
        
        // Reset animation
        setTimeout(() => {
            loveCounter.style.transform = 'scale(1)';
            loveCounter.style.color = '#FFB300';
        }, 200);
    }, 150);
    
    // Add button click effect
    incrementBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        incrementBtn.style.transform = 'scale(1)';
    }, 150);
});

// Quality cards functionality
qualityCards.forEach(card => {
    card.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        
        // Add click animation
        this.style.transform = 'translateY(-8px) scale(1.05)';
        this.style.borderColor = '#FFC107';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.borderColor = '#FFB300';
        }, 200);
        
        // Show message with animation
        qualityMessage.style.opacity = '0';
        qualityMessage.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            qualityMessage.textContent = message;
            qualityMessage.style.opacity = '1';
            qualityMessage.style.transform = 'translateY(0)';
            qualityMessage.style.background = 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 235, 59, 0.2) 100%)';
        }, 100);
    });
});

// Random compliments functionality
complimentBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomComplimentText = compliments[randomIndex];
    
    // Add button animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Show compliment with fade effect
    randomCompliment.style.opacity = '0';
    randomCompliment.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        randomCompliment.textContent = randomComplimentText;
        randomCompliment.style.opacity = '1';
        randomCompliment.style.transform = 'scale(1)';
        randomCompliment.style.background = 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 235, 59, 0.25) 100%)';
        randomCompliment.style.borderColor = '#FFB300';
    }, 200);
});

// Add some interactive effects on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add floating animation to hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        // Random starting position
        heart.style.bottom = '0px';
        heart.style.animationDelay = Math.random() * 6 + 's';
    });
});

// Add some hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        if (!this.disabled) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// Add click effects to all interactive elements
document.querySelectorAll('.quality-card, .btn').forEach(element => {
    element.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 193, 7, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);