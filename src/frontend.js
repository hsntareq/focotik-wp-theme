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
