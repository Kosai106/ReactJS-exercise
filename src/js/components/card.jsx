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
      <div className="columns small-12 medium-6 large-4 xlarge-3 card" key={this.props.id}>
        <a href={this.props.url}>
          <div className="container">
            <img src={this.props.image} alt={this.props.category} />
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
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
};

export default Card;
