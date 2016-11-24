import React from 'react';
import 'whatwg-fetch';
import data from '../json/mockaroo.json';

import Main from './components/main';
import Navigation from './components/navigation';
import Sidebar from './components/sidebar';
import Subnav from './components/subnav';

import './../scss/application.scss';

export default class All extends React.Component {
	constructor(props) {
		super(props);
		this.toggleGrid = this.toggleGrid.bind(this);
		this.state = {
			grid: false,
		};
	}

	toggleGrid() {
		this.setState({
			grid: !this.state.grid,
		});
	}

	render() {
		return (
			<div>
				<nav>
					<Navigation />
				</nav>

				<main>
					<Sidebar />
					<div className="columns small-9 main">
						<Subnav toggle={this.state.grid} handleGrid={this.toggleGrid} />
						<Main content={data} style={this.state.grid} />
					</div>
				</main>
			</div>
		);
	}
}
