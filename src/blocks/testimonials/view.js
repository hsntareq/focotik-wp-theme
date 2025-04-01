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
// console.log("Hello World! (from focotik-slider block)");


// Function to extract Vimeo ID from the URL (supports multiple formats)
function extractVimeoId(url) {
	const match = url.match(/(?:vimeo\.com\/(?:.*\/)?|player\.vimeo\.com\/video\/)(\d+)/);
	return match ? match[1] : null;
}

// Select all iframes inside .video-container to support multiple videos
document.querySelectorAll('.video-container').forEach((videoContainer) => {
	// videoContainer && videoContainer.querySelector('iframe').forEach((iframe) => {
	const iframe = videoContainer && videoContainer.querySelector('iframe');
	const loading = videoContainer && videoContainer.querySelector('.loading');

	iframe.addEventListener('load', function () {
		// Get the src attribute from the iframe
		const videoUrl = iframe.getAttribute('src');
		const videoId = extractVimeoId(videoUrl);

		if (videoId) {
			// Fetch video metadata from Vimeo oEmbed API
			fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`)
				.then(response => response.json())
				.then(data => {
					// Calculate aspect ratio and apply it to the container
					const aspectRatio = data.height / data.width;
					const container = iframe.parentElement;
					console.log(container);

					if (container) {
						iframe.style.aspectRatio = `${data.width} / ${data.height}`;
						iframe.style.display = "block";
						loading.style.display = "none";
					}
				})
				.catch(error => console.error('Error fetching video metadata:', error));
		}
	});
});




document.addEventListener("DOMContentLoaded", function () {
	const navWrapper = document.querySelector(".focotik-testimonials-tab-nav");
	const contentWrapper = document.querySelector(".focotik-testimonials-tab-content");

	if (!navWrapper || !contentWrapper) return;

	// Clear existing content inside navWrapper
	navWrapper.innerHTML = "";

	// Find all testimonial items
	const testimonialItems = contentWrapper.querySelectorAll(".focotik-testimonial-item");



	testimonialItems && testimonialItems.forEach((item, index) => {
		console.log(item);
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

			console.log('btn clicked', button);

			// Activate the clicked button and show the corresponding item
			const targetId = button.getAttribute("data-target");
			const targetItem = contentWrapper.querySelector(`#${targetId}`);

			// Deactivate all buttons and hide all items
			buttons.forEach((btn) => btn.classList.remove("active"));
			testimonialItems.forEach((item) => {
				item.style.display = "none";
				console.log(item);
				const player = new Vimeo.Player(item.querySelector('.vimeo-player'));

				// Pause the video
				player.pause().then(function () {
					console.log('Video paused!');
				}).catch(function (error) {
					console.error('Error pausing video:', error);
				});

			});

			if (targetItem) {
				button.classList.add("active");
				targetItem.style.display = "flex"; // Show the corresponding testimonial item
			}
		});
	});
});
