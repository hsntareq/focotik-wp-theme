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

	useEffect(() => {
		console.log(attributes);

		/* if ( ! attributes.content ) {
			setAttributes({ content: 'Add testimonial content...' });
		}
		if ( ! attributes.author ) {
			setAttributes({ author: 'Add author name...' });
		} */
	} );

	return (
		<div {...useBlockProps()}>
            <RichText
                tagName="p"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder={__('Add testimonial content...', 'focotik')}
            />
            <RichText
                tagName="cite"
                value={attributes.author}
                onChange={(author) => setAttributes({ author })}
                placeholder={__('Add author name...', 'focotik')}
            />
        </div>
	);
}
