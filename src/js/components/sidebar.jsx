import React from 'react';
import { Link } from 'react-router';

import './../../scss/components/sidebar.scss';

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="columns small-3 sidebar push-double--top">
				<Link to="upload/">
					<p className="cta cta--wide">
						Upload content
					</p>
				</Link>
				<footer className="text--center">
					<span>
						Copyright &copy; 2016 Copyright Holder. All Rights Reserved.
					</span>
				</footer>
			</div>
		);
	}
}
