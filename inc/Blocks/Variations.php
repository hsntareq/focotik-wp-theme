<?php

/**
 * Block Variations
 *
 * @package wordpress-theme
 * @since 1.0
 */

namespace Focotik\Blocks;

use Focotik\Blocks\Variations\Btn_Orange_Color;
use Focotik\Blocks\Variations\Btn_White_Color;
use Focotik\Blocks\Variations\Case_Study_Query_Loop;
use Focotik\Blocks\Variations\Grid_Card;
use Focotik\Blocks\Variations\Grid_Gradient;
use Focotik\Blocks\Variations\List_With_Bullet;
use Focotik\Blocks\Variations\List_With_Circle;
use Focotik\Blocks\Variations\List_With_Gradient_Bullet;
use Focotik\Blocks\Variations\List_With_Right_Arrow;

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Block_Variations Class
 */
class Variations
{

	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.

	/**
	 * Class constructor
	 * (private to enforce singleton pattern).
	 */
	private function __construct()
	{
		// All the initialization tasks.
		$this->register_hooks();
	}


	public function register_hooks()
	{
		// Register block styles.
		add_action('enqueue_block_assets', array($this, 'focotik_register_block_styles'));
	}

	/**
	 * Register block variations
	 */
	public function focotik_register_block_styles()
	{
		// Register block variations.
		Btn_Orange_Color::get_instance();
		Btn_White_Color::get_instance();
		Case_Study_Query_Loop::get_instance();
		Grid_Gradient::get_instance();
		Grid_Card::get_instance();
		List_With_Bullet::get_instance();
		List_With_Gradient_Bullet::get_instance();
		List_With_Circle::get_instance();
		List_With_Right_Arrow::get_instance();
	}
}
