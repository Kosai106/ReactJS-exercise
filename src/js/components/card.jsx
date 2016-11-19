import React from 'react';
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
	toggleLiked() {
		this.setState({
			liked: !this.state.liked,
		});
	}

	render() {
		const likedClass = this.state.liked ? 'fa fa-heart' : 'fa fa-heart-o';

		return (
			<div className="columns small-12 medium-6 large-4 xlarge-3 card" key={this.props.id}>
				<a href={this.props.url}>
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
                    renderStarIcon={(index, value) => { return <i className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />; }}
									/>
								</div>
								<div className="favourite">
									<i onClick={(e) => { this.toggleLiked(e); }} className={likedClass} />
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

Card.propTypes = {
	id: React.PropTypes.number,
	guid: React.PropTypes.string,
	title: React.PropTypes.string,
	image: React.PropTypes.string.isRequired,
	url: React.PropTypes.string,
	category: React.PropTypes.string,
	rating: React.PropTypes.number,
	liked: React.PropTypes.bool,
};
