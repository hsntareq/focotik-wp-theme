<?php

/**
 * Plugin File: AM API
 * Description: This plugin will show related random posts under each post.
 *
 * @package wordpress-plugin
 * @since 1.0
 */

namespace Focotik;

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Plugin_Main Class
 */
class Enqueue {
	use Traits\Singleton, Traits\PluginData; // Use the Singleton and PluginData trait.

	/**
	 * Class constructor (private to enforce singleton pattern).
	 *
	 * @return void
	 */
	private function __construct() {
		// All the initialization tasks.
		$this->init();
	}

	public function init() {
		// Enqueue style for frontend
		add_action('enqueue_block_assets', array($this, 'enqueue_frontend_style'));
		add_action('wp_enqueue_scripts', array($this, 'wp_enqueue_frontend_style'));
	}

	/**
	 * Enqueue style for frontend.
	 *
	 * @return void
	 */
	public function wp_enqueue_frontend_style() {

		// Check if any post on the page has your block
		wp_enqueue_script(
			'focotik-player-vimeo',  // Changed handle to use hyphen instead of dot
			'https://player.vimeo.com/api/player.js',
			array(),
			'1.0.0',
			true
		);
	}

	/**
	 * Enqueue style for frontend.
	 *
	 * @return void
	 */
	public function enqueue_frontend_style() {


		wp_enqueue_style('frontend-style', get_stylesheet_directory_uri() . '/build/frontend.css', array(), '1.0.0', 'all');
		wp_enqueue_script(
			'focotik-script',
			get_stylesheet_directory_uri() . '/build/frontend.js',
			array(),
			'1.0.0',
			true
		);
		wp_localize_script(
			'focotik-script',
			'focotik',
			array(
				'assets_url' => FOCOTIK_ASSETS_URI,
				'site_url' => FOCOTIK_SITE_URL,
				'include_url' => FOCOTIK_INCLUDE_URL
			)
		);
	}
}
