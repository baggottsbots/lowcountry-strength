tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        athletic: ['Oswald', 'sans-serif'],
                    },
                    colors: {
                        charcoal: '#1A1A1A',
                        accentRed: '#E63946',
                        accentRedHover: '#C82D3A',
                    }
                }
            }
        }

// ===== MOBILE MENU TOGGLE =====
    // Function: initMobileMenu()
    // Purpose: Show/hide mobile navigation panel on viewport width adaptation
    // Triggers: Click on burger menu button
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconClosed = document.getElementById('menu-icon-closed');
        const menuIconOpened = document.getElementById('menu-icon-opened');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                
                // Toggle expansion attributes
                mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
                
                // Toggle inner SVG graphic state
                menuIconClosed.classList.toggle('hidden');
                menuIconOpened.classList.toggle('hidden');
            });
        }
    });