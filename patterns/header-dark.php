<?php

/**
 * Title: header dark
 * Slug: focotik/header-dark
 * Categories: hidden
 * Inserter: no
 */
?>
<!-- wp:group {"metadata":{"name":"Container"},"className":"header-dark","style":{"color":{"background":"transparent","text":"#eff2f6"},"elements":{"link":{"color":{"text":"#eff2f6"}}}},"layout":{"type":"constrained","contentSize":"1170px"}} -->
<div class="wp-block-group header-dark has-text-color has-background has-link-color" style="color:#eff2f6;background-color:transparent"><!-- wp:group {"metadata":{"name":"Header"},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:site-logo {"shouldSyncIcon":false} /-->

			<?php generate_navigation_html(); ?>
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button" style="background-color:#eb6945"><?php esc_html_e('Let\'s Talk -&gt;', 'focotik'); ?></a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->