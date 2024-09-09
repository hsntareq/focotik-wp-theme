<?php

namespace Focotik\Blocks\Variations;

class List_With_Bullet
{
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct()
	{
		register_block_style('core/list', array(
			'name'         => 'list-with-bullet',
			'label'        => __('Bullet', 'focotik'),
			'inline_style' => '
			.wp-block-list.is-style-list-with-bullet {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.wp-block-list.is-style-list-with-bullet li {
				display: flex;
				align-items: flex-start;
				margin-bottom: 0.5em;
			}

			.wp-block-list.is-style-list-with-bullet li::before {
				content: "";
				width: 24px;
				height: 24px;
				background-image: url(' . FOCOTIK_THEME_URI . 'assets/images/svg-icons/bullet.svg);
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 0.5em;
				flex-shrink: 0;
			}'
		));
	}

}
