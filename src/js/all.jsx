import React from 'react';
import 'font-awesome-webpack';
import 'whatwg-fetch';
import Main from './components/main';
import Navigation from './components/navigation';
import Sidebar from './components/sidebar';
import Subnav from './components/subnav';

import './../scss/application.scss';

const data = require('!json!./../json/data.json');

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <nav>
          <Navigation />
        </nav>

        <main>
          <Sidebar />
          <div className="columns small-9 main">
            <Subnav />
            <Main content={data} />
          </div>
        </main>
      </div>
    );
  }
}

export default All;
