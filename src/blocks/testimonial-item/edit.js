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
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';

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
export default function Edit() {
	const blockProps = useBlockProps({
        className: 'foco-testimonial__container',
    });

    const template = [
        [
            'core/image',
            {
                className: 'foco-testimonial__icon',
            },
        ],
		[
            'core/group',
            {
                className: 'row',
            },
            [
                [
					'core/group',
					{
						className: 'row',
					},
					[
						[
							'core/video',
							{
								className: 'foco-testimonial__video',
							},
						],
					],
				],
				[
					'core/group',
					{
						className: 'content',
					},
					[
						[
							'core/paragraph',
							{
								placeholder: __('Testimonial Message', 'gg-blocks'),
								className: 'foco-testimonial__message',
							},
						],
						[
							'core/heading',
							{
								placeholder: __('Author Name', 'gg-blocks'),
								className: 'foco-testimonial__author',
							},
						],
						[
							'core/paragraph',
							{
								placeholder: __('Author Info', 'gg-blocks'),
								className: 'foco-testimonial__author-info',
							},
						],
					],
				],
            ],
        ],

    ];

    return (
        <div {...blockProps}>
            <InnerBlocks
                template={template}
                templateLock="all"
                renderAppender={() => <InnerBlocks.DefaultBlockAppender />}
            />
        </div>
    );
}
