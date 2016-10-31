import React from 'react';
import 'font-awesome-webpack';
import Main from './components/main';

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default All;
