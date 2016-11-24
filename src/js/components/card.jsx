import React from 'react';
import { Link } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

import './../../scss/components/card.scss';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: this.props.liked || false,
			rating: this.props.rating || 0,
		};
	}

	onStarClick(nextValue) {
		this.setState({
			rating: nextValue,
		});
	}
	toggleLiked(e) {
		this.setState({
			liked: !this.state.liked,
		});
		e.preventDefault(); // Prevents accidenttally going to the event page when favouriting.
	}

	render() {
		const likedClass = this.state.liked ? './img/heart-full.svg' : './img/heart-empty.svg';

		return (
			<div className="columns small-12 medium-6 large-4 xlarge-3 card">
				<Link to={`event/${this.props.guid}/`}>
					<div className="container">
						<img src={this.props.image} alt={this.props.category} />
						<div className="details">
							<div className="top">
								<div className="title">{this.props.title}</div>
							</div>
							<div className="bottom">
								<div className="rating">
									<StarRatingComponent
										name={this.props.guid}
										starCount={5}
										value={this.state.rating}
										onStarClick={(e) => { this.onStarClick(e); }}
										renderStarIcon={(index, value) => {
											return index <= value ? <img role="presentation" src="./img/star-full.svg" />
																						: <img role="presentation" src="./img/star-empty.svg" />;
										}}
									/>
								</div>
								<div className="favourite">
									<img onClick={(e) => { this.toggleLiked(e); }} role="presentation" src={likedClass} />
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

Card.propTypes = {
	id: React.PropTypes.number,
	guid: React.PropTypes.string,
	title: React.PropTypes.string,
	image: React.PropTypes.string.isRequired,
	category: React.PropTypes.string,
	rating: React.PropTypes.number,
	liked: React.PropTypes.bool,
};
