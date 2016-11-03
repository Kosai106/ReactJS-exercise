import React from 'react';
import Dropdown from './navigation/dropdown';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="columns small-3 logo">
          <a href="index.html">
            <h1>
              Logo goes here
            </h1>
          </a>
        </div>
        <div className="columns small-9">
          <div className="row push-half--top chamber-none--sides">
            <div className="columns small-4 medium-6 large-8 xlarge-8 xxlarge-8 push--none">
              <input className="search" placeholder="Search..." />
            </div>
            <div className="columns small-8 medium-6 large-4 xlarge-4 xxlarge-4 push--none">
              <Dropdown />
              <a className="cta float--right" href="#zzz">
                Upload content
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
