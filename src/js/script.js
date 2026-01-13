
  
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Intersection Observer for animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all skill cards and project cards
        document.querySelectorAll('.skill-card, .project-card, .stat-box').forEach(el => {
            observer.observe(el);
        });

        // Form submission handler
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && subject && message) {
                alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}`);
                this.reset();
            } else {
                alert('Please fill in all fields');
            }
        });

        // Cursor glow effect (Optional enhancement)
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            // Could add a custom cursor glow here
        });

        // Add scroll animation to hero subtitle
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-content');
            if (parallax) {
                // parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Mobile menu toggle (if you add mobile menu functionality)
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        // Glitch effect text attribute
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                const h1 = heroSection.querySelector('h1');
                if (h1) {
                    h1.classList.add('glitch');
                }
            });
            
            heroSection.addEventListener('mouseleave', () => {
                const h1 = heroSection.querySelector('h1');
                if (h1) {
                    h1.classList.remove('glitch');
                }
            });
        }
    