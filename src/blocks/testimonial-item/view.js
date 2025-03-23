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

/* eslint-disable no-console */
console.log("Hello World! (from focotik-testimonial-item block)");

/* eslint-enable no-console */
// Wait for the DOM to load
/* document.addEventListener('DOMContentLoaded', function () {
	// Get the iframe element
	const iframe = document.getElementById('vimeo-player');

	// Initialize the Vimeo Player
	const player = new Vimeo.Player(iframe);

	// Add an event listener to the external button
	const pauseButton = document.getElementById('pause-button');
	pauseButton.addEventListener('click', function () {
		// Pause the video
		player.pause().then(function () {
			console.log('Video paused!');
		}).catch(function (error) {
			console.error('Error pausing video:', error);
		});
	});

	// Example: Pause the video when clicking anywhere outside the iframe
	document.addEventListener('click', function (event) {
		if (!iframe.contains(event.target)) {
			player.pause().then(function () {
				console.log('Video paused!');
			}).catch(function (error) {
				console.error('Error pausing video:', error);
			});
		}
	});
});
 */
