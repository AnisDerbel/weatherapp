import React from 'react';
import {DailyForecast} from './DailyForecast';
import {render} from '../../../../testing/testingLibrary';
import {mockForecast} from '../../../../testing/globalMocks';

describe('DailyForecast', () => {
  it('renders section headers and forecast items correctly', () => {
    const {getByText, getAllByText} = render(
      <DailyForecast forecast={mockForecast} />,
    );

    expect(getByText('5-Day Forecast')).toBeTruthy();

    expect(getByText('Monday')).toBeTruthy();
    expect(getByText('Tuesday')).toBeTruthy();

    expect(getAllByText('10:00').length).toBeGreaterThan(0);
    expect(getByText('12°')).toBeTruthy();
    expect(getByText('20°')).toBeTruthy();
  });
});
