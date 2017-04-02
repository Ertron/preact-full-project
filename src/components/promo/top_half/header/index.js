import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default () => (
	<div class={style.header}>
		<a href="/">
			<img src={require('../../assets/images/logo.png')} />
		</a>
		<ul class={style.main_menu_block}>
			<li><a href="#">Features</a></li>
			<li><a href="#">Pricing</a></li>
			<li><a href="#">Agencies</a></li>
			<li><a href="#">Social Media Academy</a></li>
			<li class={style.orange_btn}><a href="#">Sign in</a></li>
			<li class={style.big_orange_btn}><a href="#">get started</a></li>
		</ul>
		<div class={style.mobile_menu}>
			<img src={require('../../assets/images/mob_menu.svg')} />
		</div>
	</div>
);
