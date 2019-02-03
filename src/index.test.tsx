import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import FullpageAccordion from './index';
import data from '../__mocks__/mockData';

describe('Test FullpageAccordion for panel container div', async () => {
  const { container, getByText } = render(<FullpageAccordion items={data} />);
  it('Should find one panels div', () => {
    const panel = container.getElementsByClassName('panels');
    expect(panel).toHaveLength(1);
  });
  it('Should find five panel elements', () => {
    const panels = container.getElementsByClassName('panel');
    expect(panels).toHaveLength(5);
  });
  it('should click the first panel', async () => {
    const panels = container.getElementsByClassName('panel');
    const [panel] = panels;
    fireEvent.click(panel);
    expect(panel.classList.contains('open')).toBe(true);
  });
});
