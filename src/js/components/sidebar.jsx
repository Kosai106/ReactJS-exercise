import React from 'react';

import './../../scss/components/sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="columns small-3 sidebar push-double--top">
        <a className="cta cta--wide" href="#zzz">
          Upload content
        </a>
        <div className="chamber-triple--top">
          This is a React app. There&apos;s no database at this point, all the data is gathered from a .json file instead.
        </div>
        <div className="push-triple--top">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
        </div>
        <footer className="text--center">
          <span>
            Copyright &copy; 2016 Copyright Holder All Rights Reserved.
          </span>
        </footer>
      </div>
    );
  }
}

export default Sidebar;
