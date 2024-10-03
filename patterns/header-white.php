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
			<!-- wp:image {"lightbox":{"enabled":false},"id":25,"width":"169px","sizeSlug":"full","linkDestination":"custom"} -->
			<figure class="wp-block-image size-full is-resized"><a href="/"><img src="<?php echo esc_url(FOCOTIK_THEME_URI); ?>assets/images/logo.png" alt="" class="wp-image-25" style="width:169px" /></a></figure>
			<!-- /wp:image -->
			<?php echo generate_navigation_html(); ?>
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button" style="background-color:#eb6945">Let's Talk <img class="wp-image-1309" style="width: 24px;" src="<?php echo esc_url(FOCOTIK_THEME_URI) ?>assets/images/arrow.png" alt="arrow"></a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
	<!-- wp:pattern {"slug":"focotik/mega-menu"} -->
</div>
<!-- /wp:group -->