<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$case_studies = get_posts(array("post_type" => 'case-studies', 'posts_per_page' => 5));
// print_r(count($case_studies));die;
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
			<?php echo count($case_studies); ?>
			<div class="posts-container">
			<?php
				$row_count = 0; // Counter to track the number of rows displayed

				foreach ($case_studies as $index => $post):
					// Break the loop after 3 rows
					if ($row_count >= 3) {
						break;
					}

					// Determine if the current row is odd or even
					$is_odd_row = $row_count % 2 === 0; // Odd rows have 2 items
					$item_count = $is_odd_row ? 2 : 1;

					// Open the row container
					echo '<div class="wp-block-group' . ($is_odd_row ? ' gap32 grid-column-auto' : '') . '" style="margin-top:0;margin-bottom:0;display:grid;grid-template-columns: repeat(' . $item_count . ', minmax(0,1fr));">';

					// Render the current post
					echo render_post_item($post);

					// For odd rows, render the second item if it exists
					if ($is_odd_row && isset($case_studies[$index + 1])) {
						echo render_post_item($case_studies[$index + 1]);
						$index++; // Increment index to skip the second post in the odd row
					}

					// Close the row container
					echo '</div>';

					// Add <hr> if it's not the last row
					if ($row_count < 2) { // Since the last row is the 3rd row (index 2)
						echo '<hr style="margin-bottom:80px;border-color:#C6CBCE">';
					}

					// Increment row count after each row is rendered
					$row_count++;
				endforeach;
			?>
			</div>
		<?php endif; ?>
	</div>
</div>
