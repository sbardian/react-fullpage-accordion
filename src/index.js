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

  handleClick = item => {
    const { activePanel } = this.state;
    let value = item.target.dataset.key
      ? item.target.dataset.key
      : item.target.parentNode.dataset.key;
    value = value === activePanel ? null : value;
    this.setState({
      activePanel: value,
    });
  };

  render() {
    const { items, height } = this.props
    const { activePanel } = this.state;

    return (
      <div className="panels">
        {items.map(item => (
          <Panel
            key={item.itemId}
            item={item}
            height={height}
            onClick={this.handleClick}
            activePanel={activePanel}
          >
            <p>{item.top}</p>
            <p>{item.middle}</p>
            <p>
              <a
                style={{ zIndex: 20 }}
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
};

FullpageAccordion.defaultProps = {
  height: null,
};

export default FullpageAccordion;
