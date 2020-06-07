/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FullpageAccordion, Panel } from './index';

const FPA = () => (
  <FullpageAccordion height="500px">
    <Panel
      itemId="0"
      background="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
    >
      <p>Give</p>
      <p>
        <a href="/duckPage">Duck!</a>
      </p>
      <p>a try!</p>
    </Panel>
    <Panel
      itemId="1"
      background="https://source.unsplash.com/ITjiVXcwVng/1500x1500"
    >
      <p>Give</p>
      <p>
        <a href="/oberynPage">Oberyn!</a>
      </p>
      <p>a try!</p>
    </Panel>
  </FullpageAccordion>
);

describe('Test FullpageAccordion for panel div', () => {
  it('Should find one panels div', () => {
    const { getByTestId } = render(<FPA />);
    expect(getByTestId('panels')).toBeTruthy();
  });
  it('Should find five panel elements', () => {
    const { queryAllByTestId } = render(<FPA />);
    expect(queryAllByTestId('panel')).toHaveLength(2);
  });
  it('should click the first panel', async () => {
    const { queryAllByTestId } = render(<FPA />);
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
    fireEvent.keyDown(panelOne);
    expect(panelOne.classList.contains('open')).toBe(true);
    expect(panelTwo.classList.contains('open')).toBe(false);
  });
});
