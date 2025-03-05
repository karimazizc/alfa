document.addEventListener('DOMContentLoaded', () => {
    // Brand Logo Slider with Links
    const brandsSlider = document.querySelector('.brands-slider');
    const brandDetails = [
        { 
            name: 'kaodim', 
            link: 'https://www.kaodim.com',
            description: 'Home Services Platform'
        },
        { 
            name: 'zonar', 
            link: 'https://www.zonar.com',
            description: 'Technology Solutions'
        },
        { 
            name: 'axiata', 
            link: 'https://www.axiata.com',
            description: 'Telecommunications Group'
        },
        { 
            name: 'unhcr', 
            link: 'https://www.unhcr.org',
            description: 'UN Refugee Agency'
        },
        { 
            name: 'sulwhasoo', 
            link: 'https://www.sulwhasoo.com',
            description: 'Luxury Skincare Brand'
        },
        { 
            name: 'laneige', 
            link: 'https://www.laneige.com',
            description: 'Korean Beauty Brand'
        },
        { 
            name: 'ryo', 
            link: 'https://www.ryo-haircare.com',
            description: 'Hair Care Brand'
        },
        { 
            name: 'mise-en-scene', 
            link: 'https://www.miseenscene.com',
            description: 'Hair Styling Products'
        },
        { 
            name: 'sushi-king', 
            link: 'https://www.sushiking.com.my',
            description: 'Japanese Restaurant Chain'
        },
        { 
            name: 'small-wonder', 
            link: 'https://www.smallwondermalaysia.com',
            description: 'Educational Brand'
        },
        { 
            name: 'childrens-house', 
            link: 'https://www.thechildrenshouse.com.my',
            description: 'Montessori Preschool'
        },
        { 
            name: 'odyssey', 
            link: 'https://www.odysseymalaysia.com',
            description: 'Educational Institution'
        },
        { 
            name: 'kingsley', 
            link: 'https://www.kingsley.edu.my/kis/',
            description: 'International School'
        },
        { 
            name: 'qosmo', 
            link: 'https://www.qosmo.edu.my',
            description: 'International School'
        },
        { 
            name: 'asian-international', 
            link: 'https://www.aicollege.edu.my',
            description: 'International College'
        },
        { 
            name: 'dika-college', 
            link: 'https://www.dika.edu.my',
            description: 'Educational College'
        }
    ];

    // Create slider container with smooth scrolling
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('brands-slider-container');

    // Duplicate brands for infinite scrolling effect
    const allBrands = [...brandDetails, ...brandDetails];

    allBrands.forEach(brand => {
        const brandLogo = document.createElement('div');
        brandLogo.classList.add('brand-logo');
        
        const brandLink = document.createElement('a');
        brandLink.href = brand.link;
        brandLink.target = '_blank';
        brandLink.rel = 'noopener noreferrer';
        
        const brandImg = document.createElement('img');
        brandImg.src = `src/img/${brand.name}-logo.png`;
        brandImg.alt = `${brand.name} Logo`;
        
        // Add tooltip
        brandLogo.title = brand.description;
        
        brandLink.appendChild(brandImg);
        brandLogo.appendChild(brandLink);
        sliderContainer.appendChild(brandLogo);
    });

    brandsSlider.appendChild(sliderContainer);

    // Smooth scrolling animation
    function animateBrandSlider() {
        const slider = sliderContainer;
        const sliderWidth = slider.scrollWidth / 2;
        
        // Reset position when reached the midpoint
        if (slider.scrollLeft >= sliderWidth) {
            slider.scrollLeft = 0;
        }
        
        // Scroll horizontally
        slider.scrollLeft += 1;
        
        // Request next animation frame
        requestAnimationFrame(animateBrandSlider);
    }

    // Start the animation
    animateBrandSlider();

    // Pause animation on hover
    sliderContainer.addEventListener('mouseenter', () => {
        sliderContainer.style.animationPlayState = 'paused';
    });

    sliderContainer.addEventListener('mouseleave', () => {
        sliderContainer.style.animationPlayState = 'running';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling Implementation
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;
    let scrollTimeout;
    const scrollDuration = 1000; // Duration of scroll animation in ms
    const scrollCooldown = 800; // Cooldown between scrolls in ms

    // Helper function for smooth scrolling
    function smoothScrollTo(element) {
        if (isScrolling) return;
        
        isScrolling = true;
        const startPosition = window.pageYOffset;
        isScrolling = true;
        
        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Reset scrolling state after animation
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Matches typical smooth scroll duration
    }

    // Handle wheel event for full window scrolling
    window.addEventListener('wheel', (event) => {
        // Prevent multiple simultaneous scrolls
        if (isScrolling) return;

        // Determine scroll direction
        const delta = event.deltaY;

        if (delta > 0) {
            // Scrolling down
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                smoothScroll(sections[currentSectionIndex]);
            }
        } else {
            // Scrolling up
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                smoothScroll(sections[currentSectionIndex]);
            }
        }
    }, { passive: false });

    // Optional: Keyboard navigation
    window.addEventListener('keydown', (event) => {
        if (isScrolling) return;

        switch(event.key) {
            case 'ArrowDown':
                if (currentSectionIndex < sections.length - 1) {
                    currentSectionIndex++;
                    smoothScroll(sections[currentSectionIndex]);
                }
                break;
            case 'ArrowUp':
                if (currentSectionIndex > 0) {
                    currentSectionIndex--;
                    smoothScroll(sections[currentSectionIndex]);
                }
                break;
        }
    });

    // Optional: Touch support for mobile
    let startY = 0;
    window.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    }, { passive: false });

    window.addEventListener('touchmove', (event) => {
        if (isScrolling) return;

        const currentY = event.touches[0].clientY;
        const deltaY = startY - currentY;

        if (deltaY > 50) {
            // Swipe up
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                smoothScroll(sections[currentSectionIndex]);
            }
        } else if (deltaY < -50) {
            // Swipe down
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                smoothScroll(sections[currentSectionIndex]);
            }
        }

        startY = currentY;
    }, { passive: false });

    // Highlight current section (optional visual indicator)
    function updateSectionHighlight() {
        sections.forEach((section, index) => {
            section.classList.toggle('active-section', index === currentSectionIndex);
        });
    }

    // Optional: Update highlight when scrolling
    window.addEventListener('scroll', updateSectionHighlight);
});