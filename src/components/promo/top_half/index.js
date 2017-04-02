import { h, Component } from 'preact';
import style from './style';
import Header from './header';
import Content from './content';
import general from '../general_style.less';

export default () => (
		<div class={style.block_top +' '+ general.content_block}>
			<div class={general.content_w1170}>
				<Header />
				<div class="clearfix"></div>
			</div>
			<Content />
		</div>

);
