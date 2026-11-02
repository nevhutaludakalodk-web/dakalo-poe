ocument.addEventListener('DOMContentLoaded', () => {
    initGalleryLightbox();
    initSearchFilter();
    initAccordions();
    initBackToTopButton();
    initDarkModeToggle();
    initCharCounters();
});

/* --- 1. Gallery Lightbox Feature --- */
function initGalleryLightbox() {
    const images = document.querySelectorAll('main img');
    if (!images.length) return;
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none; position: fixed; z-index: 1000; top: 0; left: 0;
        width: 100%; height: 100%; background: rgba(0,0,0,0.85);
        justify-content: center; align-items: center; flex-direction: column;
    `;
    
    const imgElement = document.createElement('img');
    imgElement.style.cssText = 'max-width: 90%; max-height: 80%; border-radius: 8px; box-shadow: 0 0 20px rgba(255,255,255,0.3);';
    
    const caption = document.createElement('p');
    caption.style.cssText = 'color: #ffffff; margin-top: 15px; font-size: 1.1rem; text-align: center; font-family: sans-serif;';

    lightbox.appendChild(imgElement);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            imgElement.src = img.src;
            caption.innerText = img.alt || 'Hope for All Foundation Gallery Image';
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

/* --- 2. Dynamic Content Search & Filtering --- */
function initSearchFilter() {
    const searchContainer = document.querySelector('.page-title');
    if (!searchContainer) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'site-search';
    searchInput.placeholder = '🔍 Search meals, programs, services, or events...';
    searchInput.style.cssText = 'width: 80%; max-width: 450px; padding: 12px 18px; margin-top: 15px; border: 2px solid #27ae60; border-radius: 25px; font-size: 1rem; display: block; margin-left: auto; margin-right: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05); outline: none; background: #fff;';

    searchContainer.appendChild(searchInput);

    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.card, .service-block, .team-card, .faq-item');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* --- 3. Interactive FAQ Accordions --- */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

/* --- 4. Dark/Light Mode Theme Toggle --- */
function initDarkModeToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '🌙 Dark Mode';
    toggleBtn.style.cssText = `
        position: fixed; bottom: 20px; left: 20px; z-index: 99;
        background: #2c3e50; color: #fff; border: none; padding: 10px 15px;
        border-radius: 20px; cursor: pointer; font-size: 0.85rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        transition: background 0.3s ease;
    `;
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            toggleBtn.innerHTML = '☀️ Light Mode';
            toggleBtn.style.background = '#f39c12';
        } else {
            toggleBtn.innerHTML = '🌙 Dark Mode';
            toggleBtn.style.background = '#2c3e50';
        }
    });
}

/* --- 5. Back to Top Button --- */
function initBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Top';
    btn.style.cssText = `
        display: none; position: fixed; bottom: 20px; right: 20px; z-index: 99;
        background: #27ae60; color: #fff; border: none; padding: 10px 15px;
        border-radius: 5px; cursor: pointer; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --- 6. Live Character Counter for Textareas --- */
function initCharCounters() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const maxLength = textarea.getAttribute('maxlength') || 300;
        textarea.setAttribute('maxlength', maxLength);

        const counter = document.createElement('small');
        counter.style.cssText = 'display: block; text-align: right; color: #666; margin-top: 5px;';
        counter.innerText = `0 / ${maxLength} characters`;
        textarea.parentNode.appendChild(counter);

        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            counter.innerText = `${currentLength} / ${maxLength} characters`;
            if (currentLength >= maxLength) {
                counter.style.color = '#e74c3c';
            } else {
                counter.style.color = '#666';
            }
        });
    });
}

/* ==========================================================================
   Hope for All Foundation - Main Application JavaScript (Extended Edition)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initGalleryLightbox();
    initSearchFilter();
    initAccordions();
    initBackToTopButton();
    initDarkModeToggle();
    initCharCounters();
    
    /* --- NEW FEATURES APPENDED AT THE BOTTOM --- */
    initActiveNavLinkHighlight();
    initFormSubmitLoadingSpinner();
});

/* --- 1. Gallery Lightbox Feature --- */
function initGalleryLightbox() {
    const images = document.querySelectorAll('main img');
    if (!images.length) return;
    
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        display: none; position: fixed; z-index: 1000; top: 0; left: 0;
        width: 100%; height: 100%; background: rgba(0,0,0,0.85);
        justify-content: center; align-items: center; flex-direction: column;
    `;
    
    const imgElement = document.createElement('img');
    imgElement.style.cssText = 'max-width: 90%; max-height: 80%; border-radius: 8px; box-shadow: 0 0 20px rgba(255,255,255,0.3);';
    
    const caption = document.createElement('p');
    caption.style.cssText = 'color: #ffffff; margin-top: 15px; font-size: 1.1rem; text-align: center; font-family: sans-serif;';

    lightbox.appendChild(imgElement);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            imgElement.src = img.src;
            caption.innerText = img.alt || 'Hope for All Foundation Gallery Image';
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

/* --- 2. Dynamic Content Search & Filtering --- */
function initSearchFilter() {
    const searchContainer = document.querySelector('.page-title');
    if (!searchContainer) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'site-search';
    searchInput.placeholder = '🔍 Search meals, programs, services, or events...';
    searchInput.style.cssText = 'width: 80%; max-width: 450px; padding: 12px 18px; margin-top: 15px; border: 2px solid #27ae60; border-radius: 25px; font-size: 1rem; display: block; margin-left: auto; margin-right: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05); outline: none; background: #fff;';

    searchContainer.appendChild(searchInput);

    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.card, .service-block, .team-card, .faq-item');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* --- 3. Interactive FAQ Accordions --- */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

/* --- 4. Dark/Light Mode Theme Toggle --- */
function initDarkModeToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '🌙 Dark Mode';
    toggleBtn.style.cssText = `
        position: fixed; bottom: 20px; left: 20px; z-index: 99;
        background: #2c3e50; color: #fff; border: none; padding: 10px 15px;
        border-radius: 20px; cursor: pointer; font-size: 0.85rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        transition: background 0.3s ease;
    `;

    // Check saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        toggleBtn.innerHTML = '☀️ Light Mode';
        toggleBtn.style.background = '#f39c12';
    }

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            toggleBtn.innerHTML = '☀️ Light Mode';
            toggleBtn.style.background = '#f39c12';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.innerHTML = '🌙 Dark Mode';
            toggleBtn.style.background = '#2c3e50';
            localStorage.setItem('theme', 'light');
        }
    });
}

/* --- 5. Back to Top Button --- */
function initBackToTopButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Top';
    btn.style.cssText = `
        display: none; position: fixed; bottom: 20px; right: 20px; z-index: 99;
        background: #27ae60; color: #fff; border: none; padding: 10px 15px;
        border-radius: 5px; cursor: pointer; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --- 6. Live Character Counter for Textareas --- */
function initCharCounters() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const maxLength = textarea.getAttribute('maxlength') || 300;
        textarea.setAttribute('maxlength', maxLength);

        const counter = document.createElement('small');
        counter.style.cssText = 'display: block; text-align: right; color: #666; margin-top: 5px;';
        counter.innerText = `0 / ${maxLength} characters`;
        textarea.parentNode.appendChild(counter);

        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            counter.innerText = `${currentLength} / ${maxLength} characters`;
            if (currentLength >= maxLength) {
                counter.style.color = '#e74c3c';
            } else {
                counter.style.color = '#666';
            }
        });
    });
}

/* ==========================================================================
   ADDED FROM THE BOTTOM: NEW ADVANCED JAVASCRIPT FUNCTIONS
   ========================================================================== */

/* --- 7. Floating Toast Notification System --- */
function showToastNotification(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? '#27ae60' : (type === 'error' ? '#e74c3c' : '#3498db');
    toast.style.cssText = `
        background-color: ${bgColor}; color: #ffffff; padding: 12px 20px; border-radius: 6px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2); font-family: sans-serif; font-size: 0.95rem;
        opacity: 0; transform: translateY(-20px); transition: all 0.3s ease;
    `;
    toast.innerText = message;
    container.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);

    // Fade out and remove after 3.5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

/* --- 8. Auto Active Navigation Link Highlighter --- */
function initActiveNavLinkHighlight() {
    const navLinks = document.querySelectorAll('nav a, header a');
    if (!navLinks.length) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href') ? link.getAttribute('href').split('/').pop() : '';
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid #27ae60';
        }
    });
}

/* --- 9. Form Submission Loading Spinner State --- */
function initFormSubmitLoadingSpinner() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            if (!submitBtn) return;

            // Optional check: only apply spinner if form passes standard HTML validation
            if (form.checkValidity && !form.checkValidity()) return;

            const originalText = submitBtn.innerHTML || submitBtn.value;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';

            if (submitBtn.tagName.toLowerCase() === 'button') {
                submitBtn.innerHTML = '⏳ Processing...';
            } else {
                submitBtn.value = '⏳ Processing...';
            }

            // Show feedback toast
            showToastNotification('Processing your request...', 'info');

            // Re-enable button after processing delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
                if (submitBtn.tagName.toLowerCase() === 'button') {
                    submitBtn.innerHTML = originalText;
                } else {
                    submitBtn.value = originalText;
                }
            }, 1500);
        });
    });
}