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

		register_block_style('core/button', array(
			'name'         => 'btn-orange-color',
			'label'        => __('btn Orange Color', 'focotik'),
			'inline_style' => '.wp-block-button.is-style-btn-orange-color {
				background-color: #EB6945;
				color: #EFF2F6;
				border-radius: 40px;
				padding: 12px 24px;
			}'
		));

		register_block_style('core/button', array(
			'name'         => 'btn-white-color',
			'label'        => __('btn White Color', 'focotik'),
			'inline_style' => '.wp-block-button.is-style-btn-white-color .wp-block-button__link{
				background-color: #EFF2F6 !important;
				color: #272B2F !important;
				border-radius: 40px !important;
				padding: 12px 24px !important;
			}'
		));
	}
}

