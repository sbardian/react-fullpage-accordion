/* eslint-disable import/no-unresolved, no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Item, PanelProps } from './@types';

const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  height,
  item,
  activePanel,
  onClick,
}) => (
  <div
    key={item.itemId}
    data-testid="panel"
    className={`panel${activePanel === item.itemId ? ' open open-active' : ''}`}
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

Panel.defaultProps = {
  height: undefined,
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired,
    top: PropTypes.string.isRequired,
    middle: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  activePanel: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Panel;
