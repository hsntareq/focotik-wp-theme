import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { tabId, imageUrl, videoUrl, quote, message, tags, author, designation } = attributes;
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
					<video controls className="testimonial-video">
						<source src={videoUrl} type="video/mp4" />
					</video>
				</div>
			)}
			<div className='testimonial-content'>
				{quote && <RichText.Content tagName="blockquote" value={quote} />}
				{message && <RichText.Content tagName="p" value={message} />}
				{author && <RichText.Content tagName="p" value={author} />}
				{designation && <RichText.Content tagName="p" value={designation} />}
				{tags && (
					<RichText.Content
						tagName="span"
						value={tags}
						className="testimonial-tags"
					/>
				)}
			</div>
		</div>
	);
}
