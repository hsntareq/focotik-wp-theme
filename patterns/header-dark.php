<?php

/**
 * Title: header dark
 * Slug: focotik/header-dark
 * Categories: hidden
 * Inserter: no
 */
?>
<!-- wp:group {"className":"header-dark has-text-color has-background has-link-color","layout":{"type":"constrained","wideSize":"1170px"}} -->
<div class="wp-block-group header-dark has-text-color has-background has-link-color"><!-- wp:group {"metadata":{"name":"Header"},"style":{"spacing":{"padding":{"top":"24px","bottom":"24px"}}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group" style="padding-top:24px;padding-bottom:24px"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:image {"lightbox":{"enabled":false},"id":25,"width":"169px","height":"auto","sizeSlug":"full","linkDestination":"custom"} -->
			<figure class="wp-block-image size-full is-resized"><a href="/"><img src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>assets/images/logo-white.png" alt="" class="wp-image-25" style="width:169px;height:auto" /></a></figure>
			<!-- /wp:image -->
			<?php echo generate_navigation_html(); ?>
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button" style="background-color:#eb6945">Let's Talk -&gt;</a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
	<!-- wp:pattern {"slug":"focotik/mega-menu"} -->
	</div>
<!-- /wp:group -->