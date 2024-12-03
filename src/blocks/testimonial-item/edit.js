import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, quote } = attributes;

    const blockProps = useBlockProps();

    return (
        <div {...blockProps} className="focotik-testimonial-item">
            <MediaUpload
                onSelect={(media) => setAttributes({ imageUrl: media.url })}
                allowedTypes={['image']}
                render={({ open }) => (
                    <button onClick={open}>
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={__('Testimonial Tab Image', 'focotik')}
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                        ) : (
                            __('Upload Image', 'focotik')
                        )}
                    </button>
                )}
            />
            <RichText
                tagName="p"
                value={quote}
                onChange={(newQuote) => setAttributes({ quote: newQuote })}
                placeholder={__('Enter testimonial text...', 'focotik')}
            />
        </div>
    );
}
