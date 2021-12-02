import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue="alguma coisa" />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('alguma coisa');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput handleChange={fn} searchValue="" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
