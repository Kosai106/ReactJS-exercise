import React from 'react';

class Card extends React.Component {
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
    return (
      <div className="columns small-12 medium-6 large-4 xlarge-3 card" key={this.props.key}>
        <a href="show.html">
          <div className="container">
            <img src={this.props.src} role="presentation" />
            <div className="details">
              <div className="title">{this.props.title}</div>
              <div className="favourite">
                <i onClick={(e) => { this.toggleLiked(e); }} className={buttonClass} />
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Card.propTypes = {
  key: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Card;
