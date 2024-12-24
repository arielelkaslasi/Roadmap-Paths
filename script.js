document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav-item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');

        if (dropdown) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                    const isOpen = item.classList.contains('active');
                    dropdown.style.display = isOpen ? 'block' : 'none';
                    
                    navItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.dropdown-menu').style.display = 'none';
                        }
                    });
                }
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hero-image');
    const dotsContainer = document.querySelector('.hero-dots');
    let currentIndex = 0;
  
    images.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('hero-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => setActiveImage(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.hero-dot');
  
    function setActiveImage(index) {
      images[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      images[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    function nextImage() {
      let nextIndex = (currentIndex + 1) % images.length;
      setActiveImage(nextIndex);
    }
  
    setInterval(nextImage, 3000);
});



document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-question').classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                }
            });

            question.classList.toggle('active', !isActive);
            answer.classList.toggle('active', !isActive);
        });
    });
});




const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        // Orange colors (hue between 20 and 40 for HSL)
        this.color = `hsl(${Math.random() * 20 + 20}, 100%, 50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.96; 
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size < 0.5) {
            particles.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 5; i++) {
        const particle = new Particle(e.clientX, e.clientY);
        particles.push(particle);
    }
});

animate();


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.guide-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateX(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(255, 102, 0, 0.15)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0)';
            card.style.boxShadow = '0 2px 4px rgba(255, 102, 0, 0.1)';
        });
    });
});

