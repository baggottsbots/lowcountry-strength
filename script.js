tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            display: ['Oswald', 'sans-serif'],
          },
          colors: {
            charcoal: {
              DEFAULT: '#1A1A1A',
              light: '#262626',
              dark: '#121212',
            },
            brandRed: {
              DEFAULT: '#E63946',
              hover: '#C22531',
              light: '#FF4D5C',
            }
          }
        }
      }
    }

// ===== MOBILE MENU TOGGLE =====
    // Function: initMobileMenu()
    // Purpose: Handles showing/hiding navigation options on small viewport sizes.
    // Triggers: Click events on mobile-menu-button.
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuBtn = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const closeIcon = document.getElementById('close-icon');

      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
          const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
          
          // Toggle open state accessibility tags
          mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
          
          // Toggle hidden classes
          mobileMenu.classList.toggle('hidden');
          
          // Switch hamburger / close icons
          hamburgerIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('hidden');
        });
      }
    });