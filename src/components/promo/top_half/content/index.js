import { h, Component } from 'preact';
import style from './style';

export default () => (
	<div class={style.block_top_info}>
		<h1 class={style.center_text_f}>Stand Out On Social Media using Content Builder</h1>
		<h4 class={style.center_text_s}>Create stunning posts in seconds with 100 000+
			hand crafted templates, ideas and visuals.</h4>
		<a href="#" class={style.get_start_btn + ' ' + style.orange}>
			get started now
		</a>
	</div>
);
