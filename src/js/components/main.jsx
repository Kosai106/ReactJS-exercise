import React from 'react';
import LazyLoad from 'react-lazyload';
import Card from './card';

import './../../scss/components/main.scss';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const gridToggle = this.props.style ? 'scroll list' : 'scroll grid';

		const PlaceholderComponent = () => {
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
		};

		const cards = this.props.content.map((card) => {
			return (
				<LazyLoad
					key={card.id}
					once={true}
					height={345}
					offset={345}
					placeholder={<PlaceholderComponent />}
					overflow
				>
					<Card guid={card.guid} owner={card.owner} image={card.image} title={card.title} category={card.category} rating={card.rating} liked={card.liked} />
				</LazyLoad>
			);
		});

		return (
			<div className={gridToggle}>
				<div className="row bottom">
					{cards}
				</div>
			</div>
		);
	}
}

Main.propTypes = {
	content: React.PropTypes.array.isRequired,
	style: React.PropTypes.bool.isRequired,
};
