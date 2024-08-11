<?php

/**
 * Block Variations
 *
 * @package wordpress-theme
 * @since 1.0
 */

namespace Focotik\Blocks;

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Block_Variations Class
 */
class Variations {

	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.

	/**
	 * Class constructor
	 * (private to enforce singleton pattern).
	 */
	private function __construct() {
		// All the initialization tasks.
		$this->register_hooks();
	}


	public function register_hooks() {
		// Register block styles.
		add_action('init', array($this, 'focotik_register_block_styles'));
	}

	public function focotik_register_block_styles() {
		/*register_block_style('core/heading', array(
			'name'         => 'multi-color',
			'label'        => __('Multi Color', 'focotik'),
			'inline_style' => '.wp-block-heading.is-style-multi-color span {
				color: #EB6945;
			}'
		));*/
	}
}

