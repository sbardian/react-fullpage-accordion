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
    const [panelOne, panelTwo] = panels;
    fireEvent.click(panelOne);
    expect(panelOne.classList.contains('open')).toBe(true);
    expect(panelTwo.classList.contains('open')).toBe(false);
    fireEvent.click(panelTwo);
    expect(panelOne.classList.contains('open')).toBe(false);
    expect(panelTwo.classList.contains('open')).toBe(true);
    fireEvent.click(panelTwo);
    expect(panelOne.classList.contains('open')).toBe(false);
    expect(panelTwo.classList.contains('open')).toBe(false);
  });
});
