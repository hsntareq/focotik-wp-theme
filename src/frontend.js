import './styles.scss';
import './libs/swiper.js';

document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.foco-accordion details');

    accordionItems.forEach(item => {
        item.addEventListener('toggle', function () {
            if (item.hasAttribute('open')) {
                // Close other open items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.hasAttribute('open')) {
                        otherItem.removeAttribute('open');
                    }
                });

                // Animate opening
                const contentHeight = item.scrollHeight;
                item.style.height = contentHeight + 'px';
                item.style.overflow = 'hidden';
            } else {
                // Animate closing
                item.style.height = '0';
            }

            // Use a timeout to reset height after transition
            setTimeout(() => {
                item.style.height = '';
                item.style.overflow = ''; // Reset overflow
            }, 300); // Match the transition duration
        });
    });
});

const sentenceElements = Array.from(document.querySelectorAll(".blog-title"));

sentenceElements.forEach((el) => {
    const sentence = el.innerText;
    const words = sentence.split(" ");
    const lastWord = words.pop();
    el.innerHTML = `${words.join(" ")} <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-hover-color">${lastWord}</mark>`;
});
document.addEventListener('DOMContentLoaded', function () {
    const submenuToggles = document.querySelectorAll('.mega-services-dropdown');
    const megaDropdown = document.querySelector('.mega-dropdown');
    const mega = document.querySelector('.mega');

    if (megaDropdown) megaDropdown.style.display = 'none';
    let isHovered = false;
    let isMegaHovered = false;
    let dropdownClicked = false;

    submenuToggles.forEach(toggle => {
        // toggle.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     dropdownClicked = !dropdownClicked;
        //     if (dropdownClicked) {
        //         megaDropdown.style.display = 'flex';
        //     } else {
        //         megaDropdown.style.display = 'none';
        //     }
        // });
        toggle.addEventListener('mouseenter', function () {
            isHovered = true;
            if (megaDropdown) megaDropdown.style.display = 'flex';
            mega.style.display = 'flex';
        });
        toggle.addEventListener('mouseleave', function () {
            setTimeout(function () {
                if (!isMegaHovered && !dropdownClicked) {
                    if (megaDropdown) megaDropdown.style.display = 'none';
                    mega.style.display = 'none';
                }
            }, 300);
            isHovered = false;
        });
    });
    megaDropdown && megaDropdown.addEventListener('mouseenter', function () {
        isMegaHovered = true;
    });
    megaDropdown && megaDropdown.addEventListener('mouseleave', function () {
        setTimeout(function () {
            if (!isHovered && !dropdownClicked) {
                megaDropdown.style.display = 'none';
            }
        }, 300);
        isMegaHovered = false;
    });

    document.querySelectorAll('.show-popup').forEach(button => {
        const contactFormPopup = document.querySelector('.popup-contact-form');
        const contactFormPopupParent = document.querySelector('.popup-contact-form-parent');
        const contactFormPopupChild = document.querySelector('.popup-contact-form-child');
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.innerWidth < 768) {
                contactFormPopup.style.top = '3%';
            } else {
                contactFormPopup.style.top = '8%';
            }
            contactFormPopupParent.style.visibility = 'visible';
        });
        contactFormPopupParent.addEventListener('click', function (e) {
            e.preventDefault();
            if (!contactFormPopupChild.contains(e.target)) {
                contactFormPopup.style.top = '100%';
                setTimeout(function () {
                    contactFormPopupParent.style.visibility = 'hidden';
                }, 400);
            }
        });
    });
    const navItems = document.querySelectorAll('.header-nav-item');
    const currentUrl = window.location.href;
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.href === currentUrl) {
            item.classList.add('is-active');
        } else {
            item.classList.remove('is-active');
        }
    });
});