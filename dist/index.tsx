/* eslint-disable react/forbid-prop-types */
import React from 'react';
import 'normalize.css';
import Panel from './Panel';
import './styles.css';

class FullpageAccordion extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activePanel: null,
    };
  }

  handleClick = (item: any) => {
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
    const { items, height, textStyle } = this.props;
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
            <p style={{ ...textStyle }}>{item.top}</p>
            <p style={{ ...textStyle }}>{item.middle}</p>
            <p>
              <a
                href="https://www.google.com"
                style={{ zIndex: 20, ...textStyle }}
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

export default FullpageAccordion;
