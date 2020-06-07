/* eslint-disable react/forbid-prop-types, no-unused-vars, import/no-unresolved, import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PanelClickFn,
  PanelContextProps,
  PanelProviderProps,
} from './types/index';

const PanelContext = React.createContext<PanelContextProps>({
  activePanel: '-1',
  panelClick: (itemId) => null,
});

export const PanelContextProvider: React.FC<PanelProviderProps> = ({
  children,
}) => {
  const [activePanel, setActivePanel] = useState('-1');

  const panelClick: PanelClickFn = (itemId) => {
    const value: string = itemId === activePanel ? '-1' : itemId;
    setActivePanel(value);
    return null;
  };

  return (
    <PanelContext.Provider
      value={{
        panelClick,
        activePanel,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

PanelContextProvider.defaultProps = {
  children: () => {},
};

PanelContextProvider.propTypes = {
  children: PropTypes.node,
};

export default PanelContext;
