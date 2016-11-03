import React from 'react';
import Card from './card';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const cards = this.props.content.map((card) => {
      return <Card key={card.id} image={card.image} title={card.title} url={card.url} category={card.category} />;
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
  content: React.PropTypes.string.isRequired,
};

export default Main;
