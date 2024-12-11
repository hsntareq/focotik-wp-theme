<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


// $inner_blocks = parse_blocks( $content ); // Parse inner blocks content

// Extract attributes for the parent block (if any)
$parent_title = isset( $attributes['title'] ) ? esc_html( $attributes['title'] ) : '';

// Initialize empty array for storing child block attributes
$testimonial_items = [];
$inner_blocks = parse_blocks( $content ); // Parse inner blocks content
pr($inner_blocks);
// Loop through all the inner blocks (testimonial-item)
if ( has_blocks( $content ) ) {
	$inner_blocks = parse_blocks( $content ); // Parse inner blocks content

	foreach ( $inner_blocks as $block ) {
		// Check if it's a "testimonial-item" block
		if ( 'focotik/testimonial-item' === $block['blockName'] ) {
			// Get the block attributes
			$block_attributes = $block['attrs'];

			// Store the relevant attributes of each testimonial item
			$testimonial_items[] = [
				'id' => $block['clientId'],
				'imageUrl' => isset( $block_attributes['imageUrl'] ) ? $block_attributes['imageUrl'] : '',
				'videoUrl' => isset( $block_attributes['videoUrl'] ) ? $block_attributes['videoUrl'] : '',
				'message' => isset( $block_attributes['message'] ) ? $block_attributes['message'] : '',
				'tags' => isset( $block_attributes['tags'] ) ? $block_attributes['tags'] : '',
				'author' => isset( $block_attributes['author'] ) ? $block_attributes['author'] : '',
				'designation' => isset( $block_attributes['designation'] ) ? $block_attributes['designation'] : '',
			];
		}
	}
}

echo '<pre>';
print_r($testimonial_items);
echo '</pre>';
// echo '<div class="testimonials">' . $content . '</div>';
