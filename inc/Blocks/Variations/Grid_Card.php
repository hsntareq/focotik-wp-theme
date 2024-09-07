<?php

namespace Focotik\Blocks\Variations;

class Grid_Card
{
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct()
	{
		register_block_style('core/group', array(
			'name'         => 'grid-card',
			'label'        => __('Grid Card', 'focotik'),
			'inline_style' => '
				.wp-block-post .wp-block-group is-style-grid-card {
					padding:10px!important;
				}
			'
		));
	}
}