import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggleActive() {
    this.setState({
      active: !this.state.liked,
    });
  }
  render() {
    return (
      <div>
        <div className="user float--right" data-toggle="example-dropdown" type="button">
          <span className="chamber-triple--left">
            Username
          </span>
          <img className="avatar" src="https://d3iw72m71ie81c.cloudfront.net/male-5.jpg" role="presentation" />
        </div>
        <ul className="dropdown-pane menu vertical" data-close-on-click="true" data-dropdown="" id="example-dropdown">
          <li>
            <a className="menu" href="#zzz">
              <i className="fa fa-user" />
              Profile
            </a>
          </li>
          <li>
            <a className="menu" href="#zzz">
              <i className="fa fa-cog" />
              Settings
            </a>
          </li>
          <li>
            <a className="menu" href="#zzz">
              <i className="fa fa-sign-out" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
