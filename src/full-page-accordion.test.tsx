/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FullpageAccordion from './full-page-accordion';
import data from '../__mocks__/mockData';

describe('Test FullpageAccordion for panel container div', () => {
  it('Should find one panels div', () => {
    const { getByTestId } = render(<FullpageAccordion items={data} />);
    expect(getByTestId('panels-container')).toBeTruthy();
  });
  it('Should find five panel elements', () => {
    const { queryAllByTestId } = render(<FullpageAccordion items={data} />);
    expect(queryAllByTestId('panel')).toHaveLength(5);
  });
  it('should click the first panel', async () => {
    const { queryAllByTestId } = render(<FullpageAccordion items={data} />);
    const panels = queryAllByTestId('panel');
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
