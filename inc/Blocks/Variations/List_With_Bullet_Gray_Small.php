<?php

namespace Focotik\Blocks\Variations;

class List_With_Bullet_Gray_Small
{
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct()
	{
		register_block_style('core/list', array(
			'name'         => 'list-with-bullet-gray-small',
			'label'        => __('Bullet Gray Small', 'focotik'),
			'inline_style' => '
			.wp-block-list.is-style-list-with-bullet-gray-small {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.wp-block-list.is-style-list-with-bullet-gray-small li {
				display: flex;
				align-items: flex-start;
				margin-bottom: 12px;
				font-size:16px;
				font-style:normal;
				font-weight:400;
				line-height:1.5;
				letter-spacing:-0.2px;
			}

			.wp-block-list.is-style-list-with-bullet-gray-small li::before {
				content: "";
				width: 24px;
				height: 24px;
				background-image: url(' . FOCOTIK_THEME_URI . 'assets/images/svg-icons/bullet-grayscale.svg);
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 12px;
				flex-shrink: 0;
			}'
		));
	}

}
