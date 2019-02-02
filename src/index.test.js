import React from 'react';
import { render } from 'react-testing-library';
import FullpageAccordion from './index';
import data from '../__mocks__/mockData';

describe('Test FullpageAccordion for panel container div', async () => {
  const { container, debug } = render(<FullpageAccordion items={data} />);
  it('Should find one panels div', () => {
    const panel = container.getElementsByClassName('panels');
    expect(panel).toHaveLength(1);
  });
  it('Should find five panel elements', () => {
    const panels = container.getElementsByClassName('panel');
    expect(panels).toHaveLength(5);
  });
});
