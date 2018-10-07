import React, { Component } from 'react';

class FullpageAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: 'test',
    };
  }

  render() {
    const { someState } = this.state;
    return (
      <div>
        <h1>hello ${someState}</h1>
      </div>
    );
  }
}

export default FullpageAccordion;
