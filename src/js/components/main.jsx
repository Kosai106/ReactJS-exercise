import React from 'react';
import Card from './card';

import './../../scss/components/main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const cards = this.props.content.map((card) => {
      return <Card key={card.id} guid={card.guid} image={card.image} title={card.title} url={card.url} category={card.category} rating={card.rating} liked={card.liked} />;
    });

    return (
      <div className="scroll">
        <div className="row bottom">
          {cards}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  content: React.PropTypes.array.isRequired,
};

export default Main;
