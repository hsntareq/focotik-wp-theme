<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$case_studies = get_posts(array("post_type" => 'case-studies', 'posts_per_page' => 10));
?>
<div class="works" style="background-color:#e7e7e7;margin-top:0;margin-bottom:0">
	<!-- <div class="wp-block-group"> -->
	<div style="max-width:1170px;margin-right:auto;margin-left:auto;padding-right:24px;padding-left:24px">
		<div class="wp-block-group is-nowrap" style="display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center">
			<h3 class="main-heading" style="color:#383a3e">Intuitive works boosting <mark style="background-color:rgba(0, 0, 0, 0);color:#eb6945" class="has-inline-color">conversions by 800%</mark></h3>
			<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
				<div class="wp-block-button"><a href="<?php echo esc_url(home_url('/works')) ?>" class="wp-block-button__link wp-element-button">Check more projects -&gt;</a></div>
			</div>
		</div>
		<div style="height:48px;margin-top:24px" aria-hidden="true"></div>

		<?php if ($case_studies): ?>
			<div class="posts-container">
				<?php foreach ($case_studies as $index => $post): ?>
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
						echo '<hr style="margin-bottom:80px;border-color:#C6CBCE">';
					} elseif ($index % 2 !== 0 || $index === count($case_studies) - 1) {
						echo '</div>'; // Close the one-item row
						echo '<hr style="margin-bottom:80px;border-color:#C6CBCE">';
					}
					?>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</div>