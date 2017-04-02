import { h, Component } from 'preact';
import Content from './content';
import style from './style';
import general from '../general_style.less';

export default () => (
		<div class={style.block_bottom +' '+ general.content_block}>
			<h1 class={style.btm_title}>How It Works?</h1>
			<Content />
			<a href="#" class={style.get_start_btn +' ' + style.white}>
				get started now
			</a>
		</div>

);
