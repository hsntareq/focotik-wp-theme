import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function TabItemEdit({ attributes, setAttributes }) {
	const { titleImageUrl, content } = attributes;

	return (
		<div {...useBlockProps()}>
			<div className="tab-title">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => setAttributes({ titleImageUrl: media.url })}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} className="button">
								{titleImageUrl ? (
									<img src={titleImageUrl} alt="Tab Title" />
								) : (
									__('Select Image', 'my-plugin')
								)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>
			<div className="tab-content">
				<RichText
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					placeholder={__('Tab Content', 'my-plugin')}
				/>
			</div>
		</div>
	);
}
