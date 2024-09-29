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
    $pages = ['Home', 'About', 'Services', 'Clients', 'Works', 'Contact', 'Product Redesign', 'MVP', 'Team Extention', 'Case Study', 'Blog'];
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
        'Works',
        'Services',
        'About',
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

function add_reset_filter_link($content)
{
    $reset_link = '<li class="cat-item' . (is_home() ? ' current-cat' : '') . '"><a href="' . home_url('/blog') . '">All topics</a></li>';
    return $reset_link . $content;
}
add_filter('wp_list_categories', 'add_reset_filter_link');

function wpdocs_codex_case_studies_init() {
	$labels = array(
		'name'                  => _x( 'Case Studies', 'Post type general name', 'focotik' ),
		'singular_name'         => _x( 'Case Study', 'Post type singular name', 'focotik' ),
		'menu_name'             => _x( 'Case Studies', 'Admin Menu text', 'focotik' ),
		'name_admin_bar'        => _x( 'New Case Study', 'Add New on Toolbar', 'focotik' ),
		'add_new'               => _x( 'Add New', 'case study', 'focotik' ),
		'add_new_item'          => __( 'Add New Case Study', 'focotik' ),
		'edit_item'             => __( 'Edit Case Study', 'focotik' ),
		'new_item'              => __( 'New Case Study', 'focotik' ),
		'view_item'             => __( 'View Case Study', 'focotik' ),
		'all_items'             => __( 'All Case Studies', 'focotik' ),
		'search_items'          => __( 'Search Case Studies', 'focotik' ),
		'not_found'             => __( 'No case studies found.', 'focotik' ),
		'not_found_in_trash'    => __( 'No case studies found in Trash.', 'focotik' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'case-studies' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 5,
		'menu_icon'          => 'dashicons-analytics',
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
	);

	register_post_type( 'case-studies', $args );
}

add_action( 'init', 'wpdocs_codex_case_studies_init' );
