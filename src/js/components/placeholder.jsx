import React from 'react';

import './../../scss/components/card.scss';

export default class PlaceholderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="columns small-12 medium-6 large-4 xlarge-3 card">
				<a href="#zzz">
					<div className="container">
						<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" role="presentation" />
						<div className="details">
							<div className="top">
								<div className="title">
									Loading...
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}
