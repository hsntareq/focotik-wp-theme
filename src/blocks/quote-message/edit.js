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
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

// import TextareaControl from '@wordpress/components';
import { PanelBody, SelectControl, ColorPalette, RangeControl } from '@wordpress/components';

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

const ALLOWED_COLORS = [
	{ name: 'Purple', color: '#DBD7FF' },
	{ name: 'Green', color: '#60A8AB' },
	{ name: 'Blue', color: '#2196f3' },
	{ name: 'Yellow', color: '#ffeb3b' },
	{ name: 'Gray', color: '#9e9e9e' },
];


export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		arrowDirectionHorizontal,
		arrowDirectionVertical,
		bgColor,
		textColor,
		boxMargin = { direction: 'left', value: 0 },
	} = attributes;


	const updateBgColor = (newColor) => setAttributes({ bgColor: newColor });
	const updateTextColor = (newColor) => setAttributes({ textColor: newColor });

	const safeMargin = { direction: 'left', value: 0, ...boxMargin };

	const marginStyle = {
		[safeMargin.direction]: `${safeMargin.value}px`, // Apply dynamic margin based on direction and value
	};

	const blockProps = useBlockProps({
		className: `${arrowDirectionHorizontal} ${arrowDirectionVertical}`,
	});

	const quoteStyle = { ...marginStyle, backgroundColor: bgColor };


	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Arrow Box Settings">
					{/* Margin Direction Dropdown */}
					<SelectControl
						label="Margin Direction"
						value={safeMargin.direction}
						options={[
							{ label: 'Left', value: 'left' },
							{ label: 'Right', value: 'right' },
						]}
						onChange={(value) =>
							setAttributes({ boxMargin: { ...boxMargin, direction: value } })
						}
					/>

					{/* Margin Value Range Control */}
					<RangeControl
						label="Margin Value (px)"
						value={safeMargin.value}
						onChange={(value) =>
							setAttributes({ boxMargin: { ...boxMargin, value: value } })
						}
						min={0}
						max={100}
						step={1}
					/>
					<SelectControl
						label="Arrow Vertical Direction"
						value={arrowDirectionVertical}
						options={[
							{ label: 'Arrow Top', value: 'arrow-top' },
							{ label: 'Arrow Bottom', value: 'arrow-bottom' },
						]}
						onChange={(value) => setAttributes({ arrowDirectionVertical: value })}
					/>
					<SelectControl
						label="Arrow Horizontal Direction"
						value={arrowDirectionHorizontal}
						options={[
							{ label: 'Arrow Left', value: 'arrow-left' },
							{ label: 'Arrow Right', value: 'arrow-right' },
						]}
						onChange={(value) => setAttributes({ arrowDirectionHorizontal: value })}
					/>
					<p>Background Color</p>
					<ColorPalette
						colors={ALLOWED_COLORS}
						value={bgColor}
						onChange={updateBgColor}
					/>
					<p>Text Color</p>
					<ColorPalette
						value={textColor}
						onChange={updateTextColor}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="quote__message" style={quoteStyle}>
				<span
					className="arrow"
					style={
						arrowDirectionHorizontal === 'arrow-right'
							? { borderLeftColor: bgColor }
							: { borderRightColor: bgColor }
					}
				></span>
				<RichText
					tagName="p"
					value={content}
					style={{ color: textColor }}
					onChange={(val) => setAttributes({ content: val })}
					placeholder="Enter your text here..."
				/>
			</div>
		</div>
	);
}
