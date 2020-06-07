/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Panel from './panel';
import { dataSingle } from '../__mocks__/mockData';

describe('Test Panel', () => {
  it('Should find one panels div', () => {
    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(
      <Panel
        item={dataSingle}
        key={dataSingle.itemId}
        onClick={handleClick}
        activePanel={1}
      >
        <p>{dataSingle.top}</p>
        <p>{dataSingle.middle}</p>
        <p>
          <a style={{ zIndex: 20 }} href="https://www.google.com">
            {dataSingle.bottom}
          </a>
        </p>
      </Panel>,
    );
    const firstP = getByText('Hey');
    const secondP = getByText('Lets');
    const thirdP = getByText('Dance');
    expect(firstP).toBeTruthy();
    expect(secondP).toBeTruthy();
    expect(thirdP).toBeTruthy();
    fireEvent.click(getByTestId('panel'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
