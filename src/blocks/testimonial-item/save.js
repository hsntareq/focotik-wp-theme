import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { tabId, imageUrl, videoUrl, emails, message, tags, author, designation } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} className="focotik-testimonial-item" id={`${tabId}`}>

			{imageUrl && (
				<img
					src={imageUrl}
					alt="Testimonial Image"
					className="testimonial-image"
				/>
			)}
			{videoUrl && (
				<div className='video-wrap'>
					<div className='video-container'>
						{/* https://vimeo.com/1060742540 video embed  2.⁠ ⁠⁠https://vimeo.com/1060739446 */}
						<iframe class="vimeo-player" src="https://player.vimeo.com/video/1060739446" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
					</div>
					<button class="pause-button">Pause Video</button>
				</div>
			)}
			<div className='testimonial-content'>
				{message && <RichText.Content tagName="p" className='testimonial-content__message' value={message} />}
				{author && <RichText.Content tagName="p" className='testimonial-content__author' value={author} />}
				{designation && <RichText.Content tagName="p" value={designation} />}
				{/* {emails &&
					<div>
						<ul style={{ display: 'flex', gap: 5, justifyContent: 'flex-start', padding: 0 }}>
							{emails.map((email, index) => (
								<li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #515457', paddingLeft: '10px' }}>
									<span>{email}</span>
								</li>
							))}
						</ul>
					</div>
				} */}
				{tags && (
					<RichText.Content
						tagName="span"
						value={tags}
						className='testimonial-content__tags'
					/>
				)}
			</div>
		</div>
	);
}

// difficult decission. time when, what, why, what you do
//
