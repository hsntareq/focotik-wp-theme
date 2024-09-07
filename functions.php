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
    $pages = [
        'About2' => [
            'title' => 'About2',
            'content' => 'This is the About page content.',
        ],
        'Contact2' => [
            'title' => 'Contact2',
            'content' => 'This is the Contact page content.',
        ],
        'Service2' => [
            'title' => 'Service2',
            'content' => 'This is the Service page content.',
        ],
    ];

    foreach ($pages as $slug => $page_data) {
        // Check if the page exists
        $existing_page = get_page_by_path(strtolower($slug));

        if (!$existing_page) {
            // If the page doesn't exist, create it
            wp_insert_post([
                'post_title'   => $page_data['title'],
                'post_content' => $page_data['content'],
                'post_status'  => 'publish',
                'post_type'    => 'page',
            ]);
        }
    }
}

// Hook the function to run on theme activation
add_action('after_switch_theme', 'create_pages_if_not_exist');
