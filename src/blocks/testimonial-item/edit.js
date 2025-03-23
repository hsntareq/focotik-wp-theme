import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { useEffect, useState, useRef, useLayoutEffect } from '@wordpress/element';
import { Button, TextareaControl, TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { tabId, emails, imageUrl, videoUrl, message, tags, author, designation } = attributes;

	const blockProps = useBlockProps({ className: "focotik-testimonial-item" });

	// console.log(blockProps.id);

	useEffect(() => {
		if (blockProps.id) {
			setAttributes({ tabId: blockProps.id });
		}
	}, []);

	const [currentEmail, setCurrentEmail] = useState('');

	// Add a new email to the list
	const addEmail = () => {
		if (currentEmail.trim() && !emails.includes(currentEmail.trim())) {
			setAttributes({ emails: [...emails, currentEmail.trim()] });
			setCurrentEmail(''); // Clear the input field
		}
	};

	// Remove an email from the list
	const removeEmail = (emailToRemove) => {
		setAttributes({ emails: emails.filter((email) => email !== emailToRemove) });
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			addEmail();
			event.preventDefault(); // Prevent form submission or newline
		}
	};

	const listRef = useRef(null);

	useLayoutEffect(() => {
		const list = listRef.current;
		let draggedItem = null;

		const handleDragStart = (e) => {
			draggedItem = e.target;
			e.target.style.opacity = '0.5';
		};

		const handleDragOver = (e) => {
			e.preventDefault();
			const target = e.target.closest('li');
			if (target && target !== draggedItem) {
				const bounding = target.getBoundingClientRect();
				const offset = e.clientY - bounding.top;
				if (offset > bounding.height / 2) {
					target.parentNode.insertBefore(draggedItem, target.nextSibling);
				} else {
					target.parentNode.insertBefore(draggedItem, target);
				}
			}
		};

		const handleDrop = (e) => {
			e.preventDefault();
			const updatedEmails = Array.from(list.children).map((li) => li.querySelector('span').textContent);
			setAttributes({ emails: updatedEmails });
			draggedItem.style.opacity = '1';
			draggedItem = null;
		};

		const handleDragEnd = (e) => {
			e.target.style.opacity = '1';
			draggedItem = null;
		};

		list.addEventListener('dragstart', handleDragStart);
		list.addEventListener('dragover', handleDragOver);
		list.addEventListener('drop', handleDrop);
		list.addEventListener('dragend', handleDragEnd);

		return () => {
			list.removeEventListener('dragstart', handleDragStart);
			list.removeEventListener('dragover', handleDragOver);
			list.removeEventListener('drop', handleDrop);
			list.removeEventListener('dragend', handleDragEnd);
		};
	}, []);



	return (
		<div {...blockProps}>
			{/* Image Upload */}
			<MediaUpload
				onSelect={(media) => setAttributes({ imageUrl: media.url })}
				allowedTypes={['image']}
				render={({ open }) => (
					<button className='logo-changer' onClick={open}>
						{imageUrl ? (
							<>
								{/* <img
										src={imageUrl}
										alt={__('Testimonial Image', 'focotik')}
										style={{ width: '100px', height: '100px', objectFit: 'cover' }}
									/> */}
								{__('Change Image', 'focotik')}
							</>
						) : (
							__('Upload Image', 'focotik')
						)}
					</button>
				)}
			/>

			{/* Video Upload */}
			<div className='video-markup'>
				<TextControl
					label="Video URL"
					value={videoUrl}
					onChange={(newVideoUrl) => setAttributes({ videoUrl: newVideoUrl })}
					placeholder="Enter video URL..." />
				<div className='video-wrap'>
					<div className='video-container'>
						{/* https://vimeo.com/1060742540 video embed  2.⁠ ⁠⁠https://vimeo.com/1060739446
	*/}
						<iframe class="vimeo-player" src={videoUrl} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
					</div>
					<button class="pause-button">Pause Video</button>
				</div>
				<MediaUpload
					onSelect={(media) => setAttributes({ videoUrl: media.url })}
					allowedTypes={['video']}
					render={({ open }) => (
						<button className='video-wrap' onClick={open}>
							{videoUrl ? (
								<video controls className="testimonial-video" style={{ 'width': '100%' }}>
									<source src={videoUrl} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							) : (
								__('Upload Video', 'focotik')
							)}
						</button>
					)}
				/>
			</div>
			<div className='testimonial-content'>

				{/* Message */}
				<RichText
					tagName="p"
					value={message}
					className='testimonial-content__message'
					onChange={(newMessage) => setAttributes({ message: newMessage })}
					placeholder={__('Enter client\'s comment here.', 'focotik')}
				/>

				{/* Tags */}

				<div className='testimonial-content__author-tags'>
					<ul ref={listRef}>
						{emails.map((email, index) => (
							<li key={index} draggable="true">
								<span>{email}</span>
								<Button
									variant="secondary"
									onClick={() => removeEmail(email)}
								>
									{/* add cross html icon here */}
									&times;
								</Button>
							</li>
						))}

						<li>
							<TextControl
								value={currentEmail}
								onKeyDown={handleKeyDown}
								onChange={(value) => setCurrentEmail(value)}
								placeholder="Add tag and ↵ "
							/>
						</li>
					</ul>
				</div>

				<RichText
					tagName="p"
					value={tags}
					className='testimonial-content__tags'
					onChange={(newTags) => setAttributes({ tags: newTags })}
					placeholder={__('Enter tags (comma-separated)...', 'focotik')}
				/>

				{/* Author */}
				<RichText
					tagName="p"
					value={author}
					className='testimonial-content__author'
					onChange={(newAuthor) => setAttributes({ author: newAuthor })}
					placeholder={__('Enter author name...', 'focotik')}
				/>

				{/* Designation */}
				<RichText
					tagName="p"
					value={designation}
					className='testimonial-content__author-designation'
					onChange={(newDesignation) => setAttributes({ designation: newDesignation })}
					placeholder={__('Enter author designation...', 'focotik')}
				/>
			</div>
		</div>
	);
}
