import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
// import { useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { imageUrl, videoUrl, message, tags, author, designation } = attributes;

	const blockProps = useBlockProps();

	// console.log(blockProps.id);

	// useEffect(() => {
	// 	if (blockProps.id) {
	// 		setAttributes({ tabId: blockProps.id });
	// 	}
	// }, []);


	return (
		<div {...blockProps} className="focotik-testimonial-item">
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
			</div>
		</div>
	);
}
