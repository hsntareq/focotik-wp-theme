<?php

/**
 * Title: header white
 * Slug: focotik/header-white
 * Categories: hidden
 * Inserter: no
 */
?>
<!-- wp:group {"metadata":{"name":"Container"},"layout":{"type":"constrained","contentSize":"1170px"}} -->
<div class="wp-block-group"><!-- wp:group {"metadata":{"name":"Header"},"style":{"spacing":{"padding":{"top":"24px","bottom":"24px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group" style="padding-top:24px;padding-bottom:24px"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group gap40">
			<!-- wp:image {"id":25,"width":"169px","sizeSlug":"full","linkDestination":"none"} -->
			<figure class="wp-block-image size-full is-resized"><img
					src="<?php echo esc_url(FOCOTIK_THEME_URI); ?>assets/images/logo.png" alt="" class="wp-image-25"
					style="width:169px" /></figure>
			<!-- /wp:image -->
			<?php echo generate_navigation_html(); ?>
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button flex items-center gap8">Let's Talk <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.84375 8L23.1563 8M23.1563 8L16.375 1M23.1563 8L16.375 15" stroke="#EFF2F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->