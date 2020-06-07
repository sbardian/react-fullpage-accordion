/* eslint-disable react/forbid-prop-types, no-unused-vars, import/no-unresolved, import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import { FullpageAccordionProps } from './@types/index';
import { PanelContextProvider } from './panel-context';

const FullpageAccordion: React.FunctionComponent<FullpageAccordionProps> = ({
  children,
  height,
}) => {
  return (
    <PanelContextProvider>
      <div
        className="panels"
        data-testid="panels"
        style={{ height: height || '100%' }}
      >
        {children}
      </div>
    </PanelContextProvider>
  );
};

FullpageAccordion.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired,
};

export default FullpageAccordion;