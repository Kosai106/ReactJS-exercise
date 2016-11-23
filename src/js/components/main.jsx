import React from 'react';
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

		const cards = this.props.content.map((card) => {
			return <Card key={card.id} guid={card.guid} image={card.image} title={card.title} category={card.category} rating={card.rating} liked={card.liked} />;
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
