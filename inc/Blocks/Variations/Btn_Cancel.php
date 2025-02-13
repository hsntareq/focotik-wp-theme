<?php

namespace Focotik\Blocks\Variations;

class Btn_Cancel
{
    use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
    public function __construct()
    {
        // Action to add register_block_style
        register_block_style('core/button', array(
            'name'         => 'btn-cancel-color',
            'label'        => __('BTN Cancel', 'focotik'),
            'inline_style' => '.wp-block-button.is-style-btn-cancel-color .wp-block-button__link{
				background-color: transparent;
				color: #F00;
				padding: 5px 10px;
			}'
        ));
    }

}
