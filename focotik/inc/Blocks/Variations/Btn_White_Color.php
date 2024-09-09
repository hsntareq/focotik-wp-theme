<?php

namespace Focotik\Blocks\Variations;

class Btn_White_Color
{
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct()
	{
		
		register_block_style('core/button', array(
			'name'         => 'btn-white-color',
			'label'        => __('BTN White Color', 'focotik'),
			'inline_style' => '.wp-block-button.is-style-btn-white-color .wp-block-button__link{
				background-color: #EFF2F6 !important;
				color: #272B2F !important;
				border-radius: 40px !important;
				padding: 12px 24px !important;
			}'
		));
	}

}
