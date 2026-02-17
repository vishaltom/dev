// FIXED Hero Animations - Using fromTo to ensure both names animate
window.addEventListener('load', () => {
    // Animate VISHAL and TOM together
    gsap.fromTo('.hero-name',
        {
            y: 60,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.2
        }
    );

    // Subtitle
    gsap.to('.hero-subtitle', {
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });

    // Subtext and buttons
    gsap.to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8
    });
});

// NAVBAR AUTO-HIDE
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 50) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }

    lastScroll = currentScroll;
});

// Line Draw Animation
const lineDraws = document.querySelectorAll('.line-draw');
lineDraws.forEach(line => {
    ScrollTrigger.create({
        trigger: line,
        start: 'top 80%',
        onEnter: () => line.classList.add('active')
    });
});

// About Text Reveal
gsap.utils.toArray('.about-text').forEach((text, i) => {
    gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: text,
            start: 'top 85%'
        }
    });
});

// Experience Cards Animation
gsap.utils.toArray('.exp-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 85%'
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));

    ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: 'power2.out'
            });
        }
    });
});

// Smooth scroll for anchor links
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

// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
    const floatElements = document.querySelectorAll('.float-anim');
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;

    floatElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        el.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
    });
});

window.addEventListener("load", () => {
    const btn = document.getElementById("discoverBtn");
    const fill = btn.querySelector("span:last-child");

    setTimeout(() => {
        fill.classList.remove("scale-x-0");
        fill.classList.add("scale-x-100");
        btn.classList.remove("text-white");
        btn.classList.add("text-black");
    }, 1050); // slight delay for premium feel
});