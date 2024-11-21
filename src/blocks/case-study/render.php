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
				<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">Check more projects -&gt;</a></div>
			</div>
		</div>
		<div style="height:48px;margin-top:24px" aria-hidden="true"></div>
		<?php
		function render_post_item($post,$signle = false) {
			if (has_post_thumbnail($post->ID)) {
				$post_thumbnail = get_the_post_thumbnail($post->ID, '', 'style=border-radius:8px;max-height:518px;object-fit:cover;width:100%');
			} else {
				$post_thumbnail = '<img src="https://via.placeholder.com/380x150" height="50" alt="" class="wp-image-945" style="border-radius:8px;width:100%;height:380px" />';
			}

			return '<div class="wp-block-group">
			<a href="'.get_the_permalink($post->ID).'">
					<figure class="wp-block-image size-full is-resized has-custom-border"> ' . $post_thumbnail . '</figure></a>
					<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
						<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>
						<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">BUSINESS</a></div>
					</div>
					<h5 class="wp-block-heading" style="margin-top:32px;font-style:normal;font-weight:600"><a href="'.get_the_permalink($post->ID).'">' . esc_html(__($post->post_title)) . '</a></h5>
				</div>';
		}
		?>

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
					} elseif ($index % 2 !== 0 || $index === count($case_studies) - 1) {
						echo '</div>'; // Close the one-item row
					}
					?>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>







		<!--<div class="wp-block-group gap32 grid-column-auto" style="margin-top:0;margin-bottom:0;display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));">
			<?php
			// pr($case_studies[0]->post_content);
			foreach ($case_studies as $case_study): ?>
				<div class="wp-block-group">
					<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>/assets/images/work-img-1.png" alt="" class="wp-image-945" style="border-radius:8px" /></figure>
					<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
						<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>
						<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">BUSINESS</a></div>
					</div>
					<h5 class="wp-block-heading"><?php echo esc_html(__($case_study->post_title)) ?></h5>
				</div>
			<?php endforeach; ?>
			<!-- <div class="wp-block-group">
				<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>/assets/images/work-img-2.png" alt="" class="wp-image-946" style="border-radius:8px;width:569px" /></figure>

				<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>

					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">FINTECH</a></div>

					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">FINTECH</a></div>
				</div>
				<h5 class="wp-block-heading">Torii — Building the world's best home buying experience.</h5>
			</div> 
		</div>

		<div style="margin-top:80px;height:80px" aria-hidden="true" class="wp-block-spacer hr"></div>

		<div class="wp-block-group" style="margin-top:0;margin-bottom:0;display:grid;grid-template-columns:repeat(1,minmax(0,1fr))">
			<div class="wp-block-group">
				<figure class="wp-block-image size-full has-custom-border"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>/assets/images/work-img-3.png" alt="" class="wp-image-953" style="border-radius:8px;object-fit:cover;" /></figure>

				<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>

					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">BUSINESS</a></div>
				</div>
				<h5 class="wp-block-heading" style="margin-top:32px;font-style:normal;font-weight:600">Wonde — Transforming the global EdTech industry with a new brand
					strategy and website.</h5>
			</div>
		</div>

		<div style="margin-top:80px;height:80px" aria-hidden="true" class="wp-block-spacer hr"></div>

		<div class="wp-block-group gap32 grid-column-auto" style="margin-top:0;margin-bottom:0;display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));">
			<div class="wp-block-group">
				<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>/assets/images/work-img-1.png" alt="" class="wp-image-945" style="border-radius:8px;width:569px" /></figure>

				<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>

					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">BUSINESS</a></div>
				</div>

				<h5 class="wp-block-heading" style="margin-top:32px;font-style:normal;font-weight:600">Torii — Building the world's best home buying experience.</h5>
			</div>

			<div class="wp-block-group">
				<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>/assets/images/work-img-2.png" alt="" class="wp-image-946" style="border-radius:8px;width:569px" /></figure>

				<div class="wp-block-buttons gap8" style="margin-top:var(--wp--preset--spacing--40);margin-bottom:var(--wp--preset--spacing--40)">
					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">WEBSITE</a></div>

					<div class="wp-block-button has-custom-font-size is-style-outline" style="font-size:14px;font-style:normal;font-weight:700"><a class="wp-block-button__link has-border-color wp-element-button" style="border-color:#b2b4b8;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px">BUSINESS</a></div>
				</div>

				<h5 class="wp-block-heading" style="margin-top:32px;font-style:normal;font-weight:600">Torii — Building the world's best home buying experience.</h5>
			</div>
		</div>-->
	</div>
</div>