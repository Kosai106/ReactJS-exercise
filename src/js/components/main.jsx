import React from 'react';
import 'whatwg-fetch';

const data = require('!json!./../../json/data.json');

class Main extends React.Component {
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
    const buttonClass = this.state.liked ? 'fa fa-heart' : 'fa fa-heart-o';
    const cards = data.map((card) => {
      return (
        <div className="columns small-12 medium-6 large-4 xlarge-3 card" key={card.id}>
          <a href="show.html">
            <div className="container">
              <img src={card.image} role="presentation" />
              <div className="details">
                <div className="title">{card.title}</div>
                <div className="favourite">
                  <i onClick={(e) => { this.toggleLiked(e); }} className={buttonClass} />
                </div>
              </div>
            </div>
          </a>
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

export default Main;
