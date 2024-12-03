import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { currentTab } = attributes;
	const [activeBlockClientId, setActiveBlockClientId] = useState(currentTab || null); // Default first tab
	const tabContentRef = useRef(null);

	const blockProps = useBlockProps();

	// Get all child blocks dynamically using `useSelect`
	const childBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId) || [],
		[clientId]
	);

	// Handle tab click to update active clientId
	const handleTabClick = (block) => {
		displayOnlyTargetBlock(`block-${block.clientId}`); // Call function when clientId changes
		setActiveBlockClientId(block.clientId); // Set active block's clientId on tab click
		setAttributes({ currentTab: block.clientId }); // Update parent block's currentTab attribute
	};

	useEffect(() => {
		if (childBlocks.length > 0 && !activeBlockClientId) {
			// Set the first block as active by default
			setActiveBlockClientId(childBlocks[0].clientId);
		}
	}, [childBlocks, activeBlockClientId]);



	// Function to display only the block matching the clientId
	const displayOnlyTargetBlock = (id) => {
		if (tabContentRef.current) {
			// Hide all blocks
			const allBlocks = tabContentRef.current.querySelectorAll('.focotik-testimonial-item');
			allBlocks.forEach((block) => {
				block.style.display = 'none'; // Hide all blocks
			});

			// Show the block with matching ID
			const targetBlock = tabContentRef.current.querySelector(`#${id}`);
			if (targetBlock) {
				targetBlock.style.display = 'block'; // Show the target block
			} else {
				console.warn(`Element with ID "${id}" not found.`);
			}
		}
	};



	return (
		<div {...blockProps} className="focotik-testimonials-tabs">
			{/* Tab Navigation */}
			<div className="focotik-testimonials-tab-nav">
				{childBlocks.map((block, index) => {
					const { imageUrl } = block.attributes; // Retrieve imageUrl from child block attributes

					return (
						<button
							key={block.clientId} // Unique key for each tab
							onClick={() => handleTabClick(block)} // Set active block based on clientId
							className={activeBlockClientId === block.clientId ? 'active' : ''}
							data-target={`block-${block.clientId}`} // Set the block id for targeting
						>
							{imageUrl ? (
								<img
									src={imageUrl}
									alt={`Tab ${index + 1}`}
									style={{ width: '50px', height: '50px', objectFit: 'cover' }}
								/>
							) : (
								`Tab ${index + 1}`
							)}
						</button>
					);
				})}
			</div>

			{/* Tab Content */}
			<div className="focotik-testimonials-tab-content" ref={tabContentRef}>
				<InnerBlocks
					allowedBlocks={['focotik/testimonial-item']}
					renderAppender={false} // Disable appender
				/>
			</div>

			{/* Default Appender for Adding New Child Blocks */}
			<div className="focotik-testimonials-add-new">
				<InnerBlocks.ButtonBlockAppender />
			</div>
		</div>
	);
}
