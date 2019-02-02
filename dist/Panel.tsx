import * as React from 'react';

interface ItemObj {
  title: string;
  itemId: number;
  top: string;
  middle: string;
  bottom: string;
  imageUrl: string;
}

interface PanelProps {
  children: any;
  height: string;
  item: ItemObj;
  activePanel: string;
  onClick: any;
}

const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  height,
  item,
  activePanel,
  onClick,
}) => (
  <button
    key={item.itemId}
    className={`panel ${
      activePanel === item.itemId.toString() ? 'open open-active' : null
    }`}
    style={{
      backgroundImage: `url("${item.imageUrl}")`,
      height: height || null,
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
    data-key={item.itemId}
  >
    {children}
  </button>
);

export default Panel;
