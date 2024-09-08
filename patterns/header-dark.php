<?php
/**
 * Title: header dark
 * Slug: focotik/header-dark
 * Categories: hidden
 * Inserter: no
 */
?>
<!-- wp:group {"metadata":{"name":"Container"},"className":"header-dark","style":{"color":{"background":"#272b2f","text":"#eff2f6"},"elements":{"link":{"color":{"text":"#eff2f6"}}}},"layout":{"type":"constrained","contentSize":"1170px"}} -->
<div class="wp-block-group header-dark has-text-color has-background has-link-color" style="color:#eff2f6;background-color:#272b2f"><!-- wp:group {"metadata":{"name":"Header"},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:site-logo {"shouldSyncIcon":false} /-->

<?php
			// Dynamically fetch page URLs and build the navigation by page titles
			$home_page = foco_page_by_title('Home');
			$about_us_page = foco_page_by_title('About Us');
			$services_page = foco_page_by_title('Services');
			$work_page = foco_page_by_title('Work');
			$blog_v1_page = foco_page_by_title('Blog V1');
			$blog_details_page = foco_page_by_title('Blog Details');
			$contact_page = foco_page_by_title('Contact');
			$product_redesign_page = foco_page_by_title('Product Redesign');
			$mvp_page = foco_page_by_title('MVP');
			$team_extension_page = foco_page_by_title('Team Extention');

			// Only proceed if all pages exist
			if ( $home_page || $about_us_page || $services_page || $work_page || $blog_v1_page || $blog_details_page || $contact_page || $product_redesign_page || $mvp_page || $team_extension_page) {
				$home_url = get_permalink($home_page->ID);
				$about_us_url = get_permalink($about_us_page->ID);
				$services_url = get_permalink($services_page->ID);
				$work_url = get_permalink($work_page->ID);
				$blog_v1_url = get_permalink($blog_v1_page->ID);
				$blog_details_url = get_permalink($blog_details_page->ID);
				$contact_url = get_permalink($contact_page->ID);
				$product_redesign_url = get_permalink($product_redesign_page->ID);
				$mvp_url = get_permalink($mvp_page->ID);
				$team_extension_url = get_permalink($team_extension_page->ID);
			?>

				<!-- wp:navigation {"className":"header-navigation"} -->
				<!-- wp:navigation-link {"label":"Home","url":"<?php echo esc_url($home_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"About Us","url":"<?php echo esc_url($about_us_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Services","url":"<?php echo esc_url($services_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Work","url":"<?php echo esc_url($work_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Blog V1","url":"<?php echo esc_url($blog_v1_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Blog Details","url":"<?php echo esc_url($blog_details_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Contact","url":"<?php echo esc_url($contact_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Product Redesign","url":"<?php echo esc_url($product_redesign_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"MVP","url":"<?php echo esc_url($mvp_url); ?>"} /-->
				<!-- wp:navigation-link {"label":"Team Extension","url":"<?php echo esc_url($team_extension_url); ?>"} /-->
				<!-- /wp:navigation -->

			<?php
			} else {
			?>
				<!-- wp:navigation {"ref":1} /-->
			<?php } ?>
</div>
<!-- /wp:group -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button" style="background-color:#eb6945"><?php esc_html_e('Let\'s Talk -&gt;', 'focotik');?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
