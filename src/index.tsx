/* eslint-disable react/forbid-prop-types */
import React, { CSSProperties, useState } from 'react';
import PropTypes from 'prop-types';
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

const FullpageAccordion: React.FunctionComponent<FullpageAccordionProps> = ({
  items,
  height,
  textStyle,
}) => {
  const [activePanel, setActivePanel] = useState(-1);

  const handleClick = (id: number) => {
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

FullpageAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      itemId: PropTypes.number.isRequired,
      top: PropTypes.string.isRequired,
      middle: PropTypes.string.isRequired,
      bottom: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  height: PropTypes.string,
  textStyle: PropTypes.object,
};

FullpageAccordion.defaultProps = {
  height: undefined,
  textStyle: {},
};

export default FullpageAccordion;
