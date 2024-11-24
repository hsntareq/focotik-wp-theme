/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { Button, TextControl } from '@wordpress/components';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, titleImageUrl, contentVideoUrl, clientInfo, testimonial } = attributes;

	const updateAttribute = (field, value) => setAttributes({ [field]: value });

	useEffect(() => {

		console.log(attributes);

	}, []);

	return (
		<div {...useBlockProps()}>
			{/* Tab Title (Image or Text) */}
			<MediaUpload
				onSelect={(media) => updateAttribute('titleImageUrl', media.url)}
				allowedTypes={['image']}
				render={({ open }) => (
					<Button onClick={open}>
						{titleImageUrl ? 'Replace Image' : 'Upload Image'}
					</Button>
				)}
			/>
			{!titleImageUrl && (
				<RichText
					value={title}
					onChange={(value) => updateAttribute('title', value)}
					placeholder="Tab Title"
				/>
			)}

			{/* Video or Image Content */}
			<MediaUpload
				onSelect={(media) => updateAttribute('contentVideoUrl', media.url)}
				allowedTypes={['video']}
				render={({ open }) => (
					<Button onClick={open}>
						{contentVideoUrl ? 'Replace Video' : 'Upload Video'}
					</Button>
				)}
			/>

			{/* Client Info */}
			<TextControl
				label="Client Info"
				value={clientInfo}
				onChange={(value) => updateAttribute('clientInfo', value)}
			/>

			{/* Testimonial */}
			<RichText
				value={testimonial}
				onChange={(value) => updateAttribute('testimonial', value)}
				placeholder="Testimonial messages"
			/>
		</div>
	);
}
