/* eslint-disable react/forbid-prop-types */
import React, { CSSProperties } from 'react';
import 'normalize.css';
import Panel from './Panel';
import './styles.css';

export interface Item {
  title: string;
  itemId: number;
  top: string;
  middle: string;
  bottom: string;
  imageUrl: string;
  link: string;
}

interface FullpageAccordionProps {
  items: Item[];
  height: string;
  textStyle: CSSProperties;
}

interface FullpageAccordionState {
  activePanel?: number;
}

class FullpageAccordion extends React.Component<
  FullpageAccordionProps,
  FullpageAccordionState
> {
  state = {
    activePanel: -1,
  };

  handleClick = (id: number) => {
    const { activePanel } = this.state;
    const value: number = id == activePanel ? -1 : id;
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
              <a href={item.link} style={{ zIndex: 20, ...textStyle }}>
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
