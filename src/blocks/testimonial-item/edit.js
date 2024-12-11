import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { Button, TextControl } from '@wordpress/components';

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
			<div className='testimonial-content'>

				{/* Message */}
				<RichText
					tagName="p"
					value={message}
					onChange={(newMessage) => setAttributes({ message: newMessage })}
					placeholder={__('Enter additional message...', 'focotik')}
				/>

				{/* Tags */}
				<RichText
					tagName="p"
					value={tags}
					onChange={(newTags) => setAttributes({ tags: newTags })}
					placeholder={__('Enter tags (comma-separated)...', 'focotik')}
				/>

				{/* Author */}
				<RichText
					tagName="p"
					value={author}
					onChange={(newAuthor) => setAttributes({ author: newAuthor })}
					placeholder={__('Enter author name...', 'focotik')}
				/>

				{/* Designation */}
				<RichText
					tagName="span"
					value={designation}
					onChange={(newDesignation) => setAttributes({ designation: newDesignation })}
					placeholder={__('Enter author designation...', 'focotik')}
				/>
				<div>
					<ul style={{ display: 'flex', gap: 5, justifyContent: 'flex-start', padding: 0 }}>
						{emails.map((email, index) => (
							<li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #515457', paddingLeft: '10px' }}>
								<span>{email}</span>
								<Button
									variant="secondary"
									style={{ fontSize: '2.3rem', lineHeight: '1', padding: '0 7px', boxShadow: 'none', color: 'red' }}
									onClick={() => removeEmail(email)}
								>
									{/* add cross html icon here */}
									&times;
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div>
					<TextControl
						label="Add Email"
						value={currentEmail}
						onKeyDown={handleKeyDown}
						onChange={(value) => setCurrentEmail(value)}
						placeholder="Enter email address..."
					/>
					<Button
						variant="primary"
						onClick={addEmail}
						disabled={!currentEmail.trim() || emails.includes(currentEmail.trim())}
					>
						Add Email
					</Button>


				</div>
			</div>
		</div>
	);
}
