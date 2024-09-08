<?php

/**
 * Functions and definitions of the theme.
 *
 * @package wordpress-theme
 * @since 1.0
 */

if (! defined('ABSPATH')) {
    exit;
}

// Load Composer autoloader.
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

Focotik\Theme_Main::get_instance();

function pr($data)
{
    echo '<pre>';
    print_r($data);
    echo '</pre>';
}

function wpdocs_register_multiple_blocks()
{
    $build_dir = __DIR__ . '/build/blocks';

    foreach (scandir($build_dir) as $result) {
        $block_location = $build_dir . '/' . $result;

        if (! is_dir($block_location) || '.' === $result || '..' === $result) {
            continue;
        }

        register_block_type($block_location);
    }
}

add_action('init', 'wpdocs_register_multiple_blocks');



function create_pages_if_not_exist()
{
    $pages = ['Home', 'About Us', 'Services', 'Clients', 'Work', 'Blog V1', 'Blog Details', 'Contact', 'Product Redesign', 'MVP', 'Team Extention', 'Case Study'];
    foreach ($pages as $slug) {
        $existing_page = get_page_by_path(strtolower($slug));
        if (!$existing_page) {
            wp_insert_post([
                'post_title'   => $slug,
                'post_status'  => 'publish',
                'post_type'    => 'page',
            ]);
        }
    }
}
add_action('after_switch_theme', 'create_pages_if_not_exist');

// Function to generate and print navigation HTML based on page titles and URLs
function generate_navigation_html()
{
    // Define the array of page titles
    $pages = array(
        'Work',
        'Clients',
        'Services',
        'About Us',
        'Contact'
    );

    // Fetch URLs for the pages using array_map and inline function
    $page_urls = array_map(function ($title) {
        $page = get_posts(array(
            'post_type' => 'page',
            'title'     => $title,
            'numberposts' => 1
        ));
        return !empty($page) ? get_permalink($page[0]->ID) : null;
    }, $pages);

    // Start building the HTML output using heredoc
    $html = <<<HTML
<!-- wp:navigation {"className":"header-navigation"} -->
HTML;

    // Loop through pages and generate links
    foreach ($pages as $index => $label) {
        if (!empty($page_urls[$index])) {
            $html .= <<<HTML
<!-- wp:navigation-link {"label":"{$label}","url":"{$page_urls[$index]}"} /-->
HTML;
        }
    }

    // Close the navigation container
    $html .= <<<HTML
<!-- /wp:navigation -->
HTML;

    // Print the final HTML
    return $html;
}


function wpdocs_register_block_patterns()
{
    register_block_pattern(
        'focotik/header-dark',
        array(
            'title'         => __('Header Dark', 'focotik'),
            'description'   => _x('This is my first block pattern', 'Block pattern description', 'focotik'),
            'content'       => '<!-- wp:group {"metadata":{"name":"Container"},"className":"header-dark","style":{"color":{"background":"transparent","text":"#eff2f6"},"elements":{"link":{"color":{"text":"#eff2f6"}}}},"layout":{"type":"constrained","contentSize":"1170px"}} -->
<div class="wp-block-group header-dark has-text-color has-background has-link-color" style="color:#eff2f6;background-color:transparent"><!-- wp:group {"metadata":{"name":"Header"},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
	<div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group"><!-- wp:site-logo {"shouldSyncIcon":false} /-->

			' . generate_navigation_html() . '
		</div>
		<!-- /wp:group -->

		<!-- wp:buttons -->
		<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#eb6945"}}} -->
			<div class="wp-block-button"><a class="wp-block-button__link has-background wp-element-button" style="background-color:#eb6945">
            let\'s talk
            </a></div>
			<!-- /wp:button -->
		</div>
		<!-- /wp:buttons -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->',
            'categories'    => array('text'),
            'keywords'      => array('cta', 'demo', 'example'),
            'viewportWidth' => 800,
        )
    );
}
add_action('init', 'wpdocs_register_block_patterns');
