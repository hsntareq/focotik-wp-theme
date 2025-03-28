import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} className="focotik-testimonials">
			<script src='https://player.vimeo.com/api/player.js'></script>
			<div className="focotik-testimonials-tabs">
				<div className="focotik-testimonials-tab-nav"></div>
				<div className="focotik-testimonials-tab-content">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
