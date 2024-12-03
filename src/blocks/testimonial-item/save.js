import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { imageUrl, quote } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="testimonial-item">
            {imageUrl && <img src={imageUrl} alt="Testimonial Image" />}
            <RichText.Content tagName="p" value={quote} />
        </div>
    );
}
