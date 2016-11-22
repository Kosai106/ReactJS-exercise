import React from 'react';
import { Link } from 'react-router';
import Dropdown from './navigation/dropdown';

import './../../scss/components/navigation.scss';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: true,
		};
	}

	render() {
		const userActive = this.state.active ? 'user float--right hover' : 'user float--right';

		return (
			<div>
				<div className="columns small-3 logo">
					<Link to="/">
						<h1>Logo goes here</h1>
					</Link>
				</div>
				<div className="columns small-9">
					<div className="push-half--top chamber-none--sides">
						<div className="columns small-4 medium-6 large-8 xlarge-8 xxlarge-8 push--none search--container">
							<input className="search" placeholder="Search..." />
						</div>
						<div className="columns small-8 medium-6 large-4 xlarge-4 xxlarge-4">
							<Dropdown style={userActive} username="Kevin Østerkilde" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
