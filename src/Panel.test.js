import React from 'react';
import { render, fireEvent, getByText } from 'react-testing-library';
import Panel from './Panel';
import { dataSingle } from '../__mocks__/mockData';

describe('Test Panel', async () => {
  const handleClick = jest.fn();
  const { container, debug } = render(
    <Panel
      item={dataSingle}
      key={dataSingle.itemId}
      onClick={handleClick}
      activePanel="1"
    >
      <p>{dataSingle.top}</p>
      <p>{dataSingle.middle}</p>
      <p>
        <a
          style={{ zIndex: 20 }}
          href="https://www.google.com"
          alt={dataSingle.title}
        >
          {dataSingle.bottom}
        </a>
      </p>
    </Panel>
  );
  // debug();
  it('Should find one panels div', () => {
    const firstP = getByText(container, "Hey");
    const secondP = getByText(container, "Lets");
    const thirdP = getByText(container, "Dance");
    expect(firstP).toBeTruthy();
    expect(secondP).toBeTruthy();
    expect(thirdP).toBeTruthy();
    // fireEvent.click(container.getElementsByClassName('panel'));
    // expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
