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