/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import Panel from './Panel';
import './styles.css';

class FullpageAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: null,
    };
  }

  handleClick = id => {
    const { activePanel } = this.state;
    const value = id == activePanel ? null : id;
    this.setState({
      activePanel: value,
    });
  };

  render() {
    const { items, height, textStyle } = this.props;
    const { activePanel } = this.state;

    return (
      <div className="panels">
        {items.map(item => (
          <Panel
            key={item.itemId}
            item={item}
            height={height}
            onClick={() => this.handleClick(item.itemId)}
            activePanel={activePanel}
          >
            <p style={{ ...textStyle }}>{item.top}</p>
            <p style={{ ...textStyle }}>{item.middle}</p>
            <p>
              <a
                style={{ zIndex: 20, ...textStyle }}
                href="https://www.google.com"
                alt={item.title}
              >
                {item.bottom}
              </a>
            </p>
          </Panel>
        ))}
      </div>
    );
  }
}

FullpageAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      itemId: PropTypes.number,
      top: PropTypes.string,
      middle: PropTypes.string,
      bottom: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ).isRequired,
  height: PropTypes.string,
  textStyle: PropTypes.object,
};

FullpageAccordion.defaultProps = {
  height: null,
  textStyle: {},
};

export default FullpageAccordion;
