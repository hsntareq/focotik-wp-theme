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
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { titleImageUrl, clientName, companyAndPosition, testimonial } = attributes;
    const updateAttribute = (field, value) => setAttributes({ [field]: value });


    return (
        <div {...blockProps}>
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

            {/* Client Name */}
            <TextControl
                label="Client Name"
                value={clientName}
                onChange={(value) => updateAttribute('clientName', value)}
                placeholder="Client Name"
                style={{ width: '100%', backgroundColor: '#f2f2f2', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}

            />
            {/* Company and Position */}
            <TextControl
                label="Company and position"
                value={companyAndPosition}
                onChange={(value) => updateAttribute('companyAndPosition', value)}
                placeholder="Company name and position"
                style={{ width: '100%', backgroundColor: '#f2f2f2', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
            />

            {/* Testimonial */}
            <RichText
                value={testimonial}
                onChange={(value) => updateAttribute('testimonial', value)}
                placeholder="Testimonial messages"
                style={{ width: '100%', backgroundColor: '#f2f2f2', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
        </div>
    );
}
