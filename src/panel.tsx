/* eslint-disable import/no-unresolved, no-unused-vars, import/extensions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PanelContext from './panel-context';
import { PanelProps } from './types/index';

const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  background,
  itemId,
}) => {
  const { activePanel, panelClick } = useContext(PanelContext);

  return (
    <div
      id={itemId}
      data-testid="panel"
      className={`panel${activePanel === itemId ? ' open open-active' : ''}`}
      style={{
        backgroundImage: `url("${background}")`,
      }}
      onClick={() => panelClick(itemId)}
      onKeyDown={() => panelClick(itemId)}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

Panel.defaultProps = {
  background: '',
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.string.isRequired,
  background: PropTypes.string,
};

export default Panel;
