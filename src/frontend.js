import './styles.scss';
// import './libs/gsap'
console.log('Hello, world! 123');
// import './blocks/blocks.js';

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
    const submenuToggles = document.querySelectorAll('.has-child');
    const megaDropdown = document.querySelector('.mega-dropdown');
    const mega = document.querySelector('.mega');

    megaDropdown.style.display = 'none';
    let isHovered = false;
    let isMegaHovered = false;
    let dropdownClicked = false;

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('clicked on ');
            
            dropdownClicked = !dropdownClicked;
            if (dropdownClicked) {
                megaDropdown.style.display = 'flex';
            } else {
                megaDropdown.style.display = 'none';
            }
        });
        toggle.addEventListener('mouseenter', function () {
            isHovered = true;
            megaDropdown.style.display = 'flex';
            mega.style.display = 'flex';
        });
        toggle.addEventListener('mouseleave', function () {
            setTimeout(function () {
                if (!isMegaHovered && !dropdownClicked) {
                    megaDropdown.style.display = 'none';
                    mega.style.display = 'none';
                }
            }, 300);
            isHovered = false;
        });
    });
    megaDropdown.addEventListener('mouseenter', function () {
        isMegaHovered = true;
    });
    megaDropdown.addEventListener('mouseleave', function () {
        setTimeout(function () {
            if (!isHovered && !dropdownClicked) {
                megaDropdown.style.display = 'none';
            }
        }, 300);
        isMegaHovered = false;
    });
});