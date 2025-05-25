import React from 'react';
import {SearchController} from './SearchController';
import {fireEvent, render} from '../../../../testing/testingLibrary';
import {mockLocation} from '../../../../testing/globalMocks';

describe('SearchController', () => {
  it('renders with location name', () => {
    const {getByTestId} = render(<SearchController location={mockLocation} />);
    expect(getByTestId('search-input')).toHaveDisplayValue('Paris');
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();

    const {getByTestId} = render(
      <SearchController location={mockLocation} onPress={mockOnPress} />,
    );

    fireEvent.press(getByTestId('search-input'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('renders empty value when location is null', () => {
    const {getByTestId} = render(<SearchController location={null} />);
    expect(getByTestId('search-input')).toHaveDisplayValue('');
  });
});
