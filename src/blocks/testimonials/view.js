/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable <no-c></no-c>onsole */
console.log("Hello World! (from focotik-slider block)");

document.addEventListener("DOMContentLoaded", function () {
	const navWrapper = document.querySelector(".focotik-testimonials-tab-nav");
	const contentWrapper = document.querySelector(".focotik-testimonials-tab-content");

	if (!navWrapper || !contentWrapper) return;

	// Clear existing content inside navWrapper
	navWrapper.innerHTML = "";

	// Find all testimonial items
	const testimonialItems = contentWrapper.querySelectorAll(".focotik-testimonial-item");

	testimonialItems.forEach((item, index) => {
		const id = item.id;
		const img = item.querySelector(".testimonial-image");
		if (!id || !img) return;

		// Create the button for each testimonial item
		const button = document.createElement("button");
		button.dataset.target = id;
		button.className = index === 0 ? "active" : ""; // Set first button active

		// Add image to the button
		const imgElement = document.createElement("img");
		imgElement.src = img.src;
		imgElement.alt = `Tab ${index + 1}`;
		imgElement.style.width = "100%";
		imgElement.style.objectFit = "cover";

		button.appendChild(imgElement);
		navWrapper.appendChild(button);

		// Show only the first testimonial item initially
		item.style.display = index === 0 ? "flex" : "none";
	});

	// Handle button clicks to toggle content
	const buttons = navWrapper.querySelectorAll("button");

	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			// Deactivate all buttons and hide all items
			buttons.forEach((btn) => btn.classList.remove("active"));
			testimonialItems.forEach((item) => (item.style.display = "none"));

			// Activate the clicked button and show the corresponding item
			const targetId = button.getAttribute("data-target");
			const targetItem = contentWrapper.querySelector(`#${targetId}`);
			console.log(targetId, targetItem.querySelector('.vimeo-player'));

			if (targetItem) {
				button.classList.add("active");
				targetItem.style.display = "flex"; // Show the corresponding testimonial item
			}
		});
	});
});
