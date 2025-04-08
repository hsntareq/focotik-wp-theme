<?php

namespace Focotik\Blocks\Variations;

class List_With_Gradient_Bullet {
	use \Focotik\Traits\Singleton; // Use the Singleton and PluginData trait.
	public function __construct() {

		register_block_style('core/list', array(
			'name'         => 'list-with-gradient-bullet',
			'label'        => __('Gradient', 'focotik'),
			'inline_style' => '
			.wp-block-list.is-style-list-with-gradient-bullet {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.wp-block-list.is-style-list-with-gradient-bullet li {
				display: flex;
				align-items: flex-start;
				margin-bottom: 12px;
				font-size:16px;
				font-wight:400;
				line-height:24px;
			}

			.wp-block-list.is-style-list-with-gradient-bullet li::before {
				content: "";
				width: 24px;
				height: 24px;
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 12px;
				flex-shrink: 0;
				display: inline-block;
				flex-shrink: 0;
				vertical-align: middle;
				background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIuMzMzNSIgY3k9IjEyLjAwMiIgcj0iOSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQyMjRfMzc5NSkiLz4KPGNpcmNsZSBjeD0iMTIuMzMzNSIgY3k9IjEyLjAwMiIgcj0iOSIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzQyMjRfMzc5NSkiLz4KPGNpcmNsZSBjeD0iMTIuMzMzNSIgY3k9IjEyLjAwMiIgcj0iOSIgZmlsbD0idXJsKCNwYWludDJfcmFkaWFsXzQyMjRfMzc5NSkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik04LjMzMzUgMTIuOTI2NkwxMC45NTkgMTUuMjA5NkwxNS4zMzM1IDEwLjAwMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQyMjRfMzc5NSIgeDE9IjEyLjMzMzUiIHkxPSIyLjk5NTM2IiB4Mj0iMTIuMzMzNSIgeTI9IjIxLjAwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRUI2OTQ1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0FBMzMxMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNDIyNF8zNzk1IiB4MT0iMTMuMDMwOCIgeTE9Ii0yNS40OTgiIHgyPSIxMy4wMzA4IiB5Mj0iOS4wNjQ0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNzM3NDc2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI3MkIyRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50Ml9yYWRpYWxfNDIyNF8zNzk1IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjMzMzUgNS44MDc4Nikgcm90YXRlKC05MCkgc2NhbGUoOSAyMC44MjA3KSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45NTkwNTgiIHN0b3AtY29sb3I9IiNGMjlFODciIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=);
			}'
		));
	}
}
