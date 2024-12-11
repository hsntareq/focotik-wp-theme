<?php

namespace Focotik\Blocks\Variations;

class List_With_Bullet_Gray
{
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct()
	{
		register_block_style('core/list', array(
			'name'         => 'list-with-bullet-gray',
			'label'        => __('Bullet Gray', 'focotik'),
			'inline_style' => '
			.wp-block-list.is-style-list-with-bullet-gray {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.wp-block-list.is-style-list-with-bullet-gray li {
				display: flex;
				align-items: flex-start;
				margin-bottom: 32px;
				font-size:20px;
				font-weight:700;
				line-height:28px;
				letter-spacing:-1%;
			}

			.wp-block-list.is-style-list-with-bullet-gray li::before {
				content: "";
				width: 24px;
				height: 24px;
				background-image: url(' . FOCOTIK_THEME_URI . 'assets/images/svg-icons/bullet-grayscale.svg);
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 13px;
				flex-shrink: 0;
			}'
		));
	}

}
