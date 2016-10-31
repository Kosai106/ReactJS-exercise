import React from 'react';
import 'whatwg-fetch';

const data = require('!json!./../../json/data.json');

class cardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  toggleLiked() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const buttonClass = this.state.liked ? 'active' : '';
    const cards = data.map((card) => {
      return (
        <div key={card.key}>
          <img src={card.image} role="presentation" />

          <div>
            <button onClick={(e) => { this.toggleLiked(e); }} className={buttonClass}>
              ♥
            </button>
            <span>{card.title}</span>
          </div>
        </div>
      );
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default cardList;
