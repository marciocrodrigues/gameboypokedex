import React from "react";
import { render } from "@testing-library/react";
import App from '../App';

describe("Render App", () => {
  it('test render screen App', () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId("search-pokemon");

    Object.defineProperty(input, 'value', {
      value: 'charmander',
    });

    expect(input.value).toEqual('charmander');
  });
})