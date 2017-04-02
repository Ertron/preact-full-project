import { h, Component } from 'preact';
import style from './style';
import general from '../../general_style.less';

export default () => (
	<div class={style.how_works_block + ' ' + general.content_w1170}>
		<div class={style.how_works_cell + ' ' + style.cell_1}>
			<img class={style.how_works_img} src={require('../../assets/images/pic1.png')} />
			<h4 class={style.how_works_text}>
				Find customizable professional templates that fit your needs.
			</h4>
		</div>
		<div class={style.how_works_cell + ' ' + style.cell_2}>
			<img class={style.how_works_img} src={require('../../assets/images/pic2.png')} />
			<h4 class={style.how_works_text}>
				Publish with one click or schedule to be published on all social networks.
			</h4>
		</div>
		<div class={style.how_works_cell + ' ' + style.cell_3}>
			<img class={style.how_works_img} src={require('../../assets/images/pic3.png')} />
			<h4 class={style.how_works_text}>
				Sell more through engagement with existing audience and get new customers.
			</h4>
		</div>
	</div>

);
