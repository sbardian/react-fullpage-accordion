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
