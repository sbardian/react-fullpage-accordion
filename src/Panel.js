import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children, height, item, activePanel, onClick }) => (
  <div
    type="button"
    key={item.itemId}
    className={`panel ${
      activePanel == item.itemId ? 'open open-active' : null
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
  </div>
);

Panel.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    itemId: PropTypes.number,
    top: PropTypes.string,
    middle: PropTypes.string,
    bottom: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
  activePanel: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Panel.defaultProps = {
  height: null,
  activePanel: null,
};

export default Panel;
