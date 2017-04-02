import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Tophalf from './promo/top_half';
import Bothalf from './promo/bottom_half';
export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	render() {
		return (
			<div id="app">
				<Tophalf />
				<Bothalf />
			</div>
		);
	}
}
