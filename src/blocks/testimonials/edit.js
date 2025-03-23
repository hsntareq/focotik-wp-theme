import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect, useRef, cloneElement } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { currentTab } = attributes;
	const [activeBlockClientId, setActiveBlockClientId] = useState(currentTab || null);
	const tabContentRef = useRef(null);
	const [lastChildCount, setLastChildCount] = useState(0);

	const blockProps = useBlockProps();

	// Get all child blocks dynamically using `useSelect`
	const childBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId) || [],
		[]
	);

	// Get the currently selected block in the editor
	const selectedBlockClientId = useSelect(
		(select) => select('core/block-editor').getSelectedBlockClientId(),
		[]
	);

	// Function to display only the block matching the clientId
	const displayOnlyTargetBlock = (id) => {
		if (tabContentRef.current) {
			// Hide all blocks
			const allBlocks = tabContentRef.current.querySelectorAll('.focotik-testimonial-item');
			allBlocks.forEach((block) => {
				block.style.display = 'none';
			});

			// Show the block with matching ID
			const targetBlock = tabContentRef.current.querySelector(`#${id}`);
			if (targetBlock) {
				targetBlock.style.display = 'flex';
			} else {
				console.warn(`Element with ID "${id}" not found.`);
			}
		}
	};

	// Handle tab click to update active clientId
	const handleTabClick = (block) => {
		displayOnlyTargetBlock(`block-${block.clientId}`);
		setActiveBlockClientId(block.clientId);
		setAttributes({ currentTab: block.clientId });
	};

	// Handle changes in selectedBlockClientId (Document Overview selection)
	useEffect(() => {
		if (selectedBlockClientId && selectedBlockClientId !== activeBlockClientId) {
			const selectedBlock = childBlocks.find(
				(block) => block.clientId === selectedBlockClientId
			);
			if (selectedBlock) {
				handleTabClick(selectedBlock);
			}
		}
	}, [selectedBlockClientId]);

	// Focus the newly added block
	useEffect(() => {
		if (childBlocks.length > lastChildCount) {
			const newBlock = childBlocks[childBlocks.length - 1];
			handleTabClick(newBlock);
		}
		setLastChildCount(childBlocks.length);
	}, [childBlocks, lastChildCount]);

	// Handle deletion of a block
	useEffect(() => {
		if (childBlocks.length < lastChildCount) {
			// Block was deleted, find the next block to display
			const deletedIndex = childBlocks.findIndex(
				(block) => block.clientId === activeBlockClientId
			);

			const nextBlock =
				childBlocks[deletedIndex] || childBlocks[deletedIndex - 1] || childBlocks[0];

			if (nextBlock) {
				handleTabClick(nextBlock);
			} else {
				// No blocks left
				setActiveBlockClientId(null);
				setAttributes({ currentTab: null });
			}
		}
		setLastChildCount(childBlocks.length);
	}, [childBlocks, activeBlockClientId]);

	// Initialize the first block as active if no active block exists
	useEffect(() => {
		if (childBlocks.length > 0 && !activeBlockClientId) {
			handleTabClick(childBlocks[0]);
		}
	}, [childBlocks, activeBlockClientId]);

	const CustomButtonBlockAppender = (props) => {
		const defaultAppender = <InnerBlocks.ButtonBlockAppender {...props} />;
		return cloneElement(defaultAppender, {},
			<>
				{defaultAppender.props.children}
				<span style={{ marginLeft: '5px', color: '#666' }}>Add a new button</span>
			</>
		);
	};


	return (
		<div {...blockProps} className="focotik-testimonials">
			<div className="focotik-testimonials-tabs">
				{/* Tab Navigation */}
				<div className="focotik-testimonials-tab-nav">
					{childBlocks.map((block, index) => {
						const { imageUrl } = block.attributes;

						return (
							<button
								key={block.clientId}
								onClick={() => handleTabClick(block)}
								className={activeBlockClientId === block.clientId ? 'active' : ''}
								data-target={`block-${block.clientId}`}
							>
								{imageUrl ? (
									<img
										src={imageUrl}
										alt={`Tab ${index + 1}`}
										style={{ width: '100%', objectFit: 'cover' }}
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
						renderAppender={false}
					/>
				</div>
			</div>
			<div className="focotik-testimonials-add-new">
				{/* <InnerBlocks.ButtonBlockAppender /> */}
				<CustomButtonBlockAppender rootClientId={clientId} />
			</div>
		</div>
	);
}
