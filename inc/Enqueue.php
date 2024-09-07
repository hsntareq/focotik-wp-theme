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
class Enqueue
{
	use Traits\Singleton, Traits\PluginData; // Use the Singleton and PluginData trait.

	/**
	 * Class constructor (private to enforce singleton pattern).
	 *
	 * @return void
	 */
	private function __construct()
	{
		// All the initialization tasks.
		$this->init();
	}

	public function init()
	{
		// Enqueue style for frontend
		add_action('enqueue_block_assets', array($this, 'enqueue_frontend_style'));
	}

	/**
	 * Enqueue style for frontend.
	 *
	 * @return void
	 */
	public function enqueue_frontend_style()
	{
		wp_enqueue_style('frontend-style', get_stylesheet_directory_uri() . '/build/frontend.css', array(), '1.0.0', 'all');
		wp_enqueue_script(
			'focotik-script',
			get_stylesheet_directory_uri() . '/build/frontend.js',
			array(),
			'1.0.0',
			true
		);
		wp_localize_script('focotik-script', 'focotik', array('assets_url' => FOCOTIK_ASSETS_URI));
	}
}
