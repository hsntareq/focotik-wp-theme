import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { titleImageUrl, clientName, companyAndPosition, testimonial } = attributes;
    const blockProps = useBlockProps.save();
    console.log(titleImageUrl);

    return (
        <div {...blockProps}>
            {/* Tab Title (Image) */}
            {titleImageUrl && (
                <div className="tab-title-image">
                    <img src={titleImageUrl} alt="Client Image" />
                </div>
            )}

            {/* Client Name */}
            {clientName && (
                <div className="client-name">
                    {/* <strong>{clientName}</strong> */}
                    <RichText.Content value={clientName} />

                </div>
            )}

            {/* Company and Position */}
            {companyAndPosition && (
                <div className="company-position">
                    {/* {companyAndPosition} */}
                    <RichText.Content value={companyAndPosition} />

                </div>
            )}

            {/* Testimonial */}
            {testimonial && (
                <div className="testimonial">
                    <RichText.Content value={testimonial} />
                </div>
            )}
        </div>
    );
}