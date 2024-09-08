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



function create_pages_if_not_exist() {
    $pages = [ 'Home','About Us','Services','Work','Blog V1','Blog Details','Contact','Product Redesign','MVP','Team Extention','Case Study'];
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


// Helper function to get a page by title
function foco_page_by_title($title) {
    $pages = get_posts(array(
        'post_type' => 'page',
        'title'     => $title,
        'numberposts' => 1
    ));
    return !empty($pages) ? $pages[0] : null;
}


// foco_page_by_title('About Us');die;
