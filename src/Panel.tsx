import React from 'react';
import { Item } from './index';

interface PanelProps {
  children: any;
  height: string;
  item: Item;
  activePanel: number;
  onClick: any;
}

const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  height,
  item,
  activePanel,
  onClick,
}) => (
  <div
    key={item.itemId}
    className={`panel ${
      activePanel == item.itemId ? 'open open-active' : null
    }`}
    style={{
      backgroundImage: `url("${item.imageUrl}")`,
      height: height || undefined,
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex={0}
    data-key={item.itemId}
  >
    {children}
  </div>
);

export default Panel;
