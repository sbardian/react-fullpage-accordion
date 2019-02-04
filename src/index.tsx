/* eslint-disable react/forbid-prop-types */
import React, { CSSProperties, useState } from 'react';
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
  height?: string;
  textStyle?: CSSProperties;
}

interface FullpageAccordionState {
  activePanel?: number;
}

const FullpageAccordion: React.FunctionComponent<FullpageAccordionProps> = ({
  items,
  height,
  textStyle,
}) => {
  const [activePanel, setActivePanel] = useState(-1);

  const handleClick: (id: number) => void = (id: number) => {
    const value: number = id === activePanel ? -1 : id;
    setActivePanel(value);
  };

  return (
    <div className="panels">
      {items.map(item => (
        <Panel
          key={item.itemId}
          item={item}
          height={height}
          onClick={() => handleClick(item.itemId)}
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
};

export default FullpageAccordion;
