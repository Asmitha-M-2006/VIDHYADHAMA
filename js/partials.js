document.addEventListener('DOMContentLoaded', () => {
    // Function to load an HTML partial into a specified element
    async function loadPartial(elementId, partialPath) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Error: Element with ID '${elementId}' not found.`);
            return;
        }

        try {
            const response = await fetch(partialPath);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for ${partialPath}`);
            }
            const html = await response.text();
            element.innerHTML = html;
            console.log(`Partial '${partialPath}' loaded successfully into '#${elementId}'.`);
            return true; // Indicate success
        } catch (error) {
            console.error(`Error loading partial '${partialPath}' into '#${elementId}':`, error);
            return false; // Indicate failure
        }
    }

    // Load navbar and footer, then initialize navbar interactivity
    (async () => {
        const navbarLoaded = await loadPartial('navbar', '/partials/navbar.html');
        loadPartial('footer', '/partials/footer.html'); // Footer can load in parallel
        lucide.createIcons(); // Initialize Lucide icons

        if (navbarLoaded) {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.getElementById('main-nav-menu'); // Using the ID added in navbar.html

            if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
                    hamburger.setAttribute('aria-expanded', !isExpanded);
                    navMenu.classList.toggle('is-open');
                });

                // Close menu when a nav link is clicked (for mobile UX)
                navMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        // Only close if the menu is actually open and it's a mobile view
                        if (navMenu.classList.contains('is-open') && window.innerWidth <= 767) {
                            hamburger.setAttribute('aria-expanded', 'false');
                            navMenu.classList.remove('is-open');
                        }
                    });
                });

                // Reset menu state on resize (desktop breakpoint is > 767px)
                let isMobileView = window.innerWidth <= 767;

                window.addEventListener('resize', () => {
                    const newIsMobileView = window.innerWidth <= 767;
                    if (isMobileView && !newIsMobileView) { // Transitioned from mobile to desktop
                        if (navMenu.classList.contains('is-open')) {
                            hamburger.setAttribute('aria-expanded', 'false');
                            navMenu.classList.remove('is-open');
                        }
                    }
                    isMobileView = newIsMobileView;
                });
            } else {
                console.warn('Hamburger button or nav menu not found after navbar loaded. Check navbar.html structure and IDs.');
            }
        }
    })();
});