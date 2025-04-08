import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

export default function save({ attributes }) {
	const { tabId, imageUrl, videoUrl, emails, message, tags, author, designation } = attributes;
	const blockProps = useBlockProps.save();
	// get default loader image url here
	// url/wp-includes/js/tinymce/skins/lightgray/img/loader.gif

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
				<div className='video-markup'>
					<div className='video-container'>
						{/* https://vimeo.com/1060742540 video embed  2.⁠ ⁠⁠https://vimeo.com/1060739446 */}
						<div className="loading"><span className="foco_loader"></span></div>
						<iframe class="vimeo-player" src={videoUrl} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
					</div>
				</div>
			)}
			<div className='testimonial-content'>
				{message && <RichText.Content tagName="p" className='testimonial-content__author-message' value={message} />}
				{emails &&
					<div className='testimonial-content__author-tags'>
						<ul>
							{emails.map((email, index) => (
								<li key={index} className='tag-item'>
									<span>{email}</span>
								</li>
							))}
						</ul>
					</div>
				}
				<div className='testimonial-content__author'>
					{author && <RichText.Content tagName="p" className='testimonial-content__author-name' value={author} />}
					{designation && <RichText.Content tagName="p" className='testimonial-content__author-designation' value={designation} />}
				</div>
			</div>
		</div >
	);
}

// difficult decission. time when, what, why, what you do
//
