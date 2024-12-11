<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$case_studies = get_posts(array("post_type" => 'case-studies', 'posts_per_page' => 5));
?>
<?php if ($case_studies): ?>
	<div class="posts-container">
		<?php
		$totalItems = count($case_studies);
		foreach ($case_studies as $index => $post): ?>
			<?php
			// Check if the current row should have two posts (odd rows) or one post (even rows)
			echo '<div class="wp-block-group' . ($index % 2 === 0 ? ' gap32 grid-column-auto' : '') . '" style="margin-top:0;margin-bottom:0;display:grid;grid-template-columns: repeat(' . ($index % 2 === 0 ? '2' : '1') . ', minmax(0,1fr));">';


			echo render_post_item($post);

			// Close the divs after each row pattern
			if ($index % 2 === 0 && isset($case_studies[$index + 1])) {
				// Check if we should display the next item in the same row for two-item rows
				echo render_post_item($case_studies[$index + 1]);

				$index++; // Increment index to skip the next post as it’s already displayed
				echo '</div>'; // Close the two-item row
				echo '<hr style="margin-block:80px;border-color:#C6CBCE">';
			} elseif ($index % 2 !== 0 || $index === count($case_studies) - 1) {
				echo '</div>'; // Close the one-item row
				if ($index < $totalItems - 1) {
					echo '<hr style="margin-block:80px;border-color:#C6CBCE">';
				}
			}
			?>
		<?php endforeach; ?>
	</div>
<?php endif; ?>