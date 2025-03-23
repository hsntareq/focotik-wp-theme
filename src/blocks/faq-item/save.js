/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes } = props;
	const blockProps = useBlockProps.save({ className: "accordion-item" });
	return (
		<div {...blockProps}>
			<div className="accordion-item-title">
				<h3 className='accordion-item-heading'>{attributes.title}</h3>
				<span class="accordion-arrow"></span>
			</div>
			<div className="accordion-item-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);

}
