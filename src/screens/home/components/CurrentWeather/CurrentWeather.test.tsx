// __tests__/CurrentWeather.test.tsx

import React from 'react';
import {CurrentWeather} from './CurrentWeather';
import {mockLocation, mockWeather} from '../../../../testing/globalMocks';
import {render} from '../../../../testing/testingLibrary';

describe('CurrentWeather', () => {
  it('renders all weather and location data correctly', () => {
    const {getByText} = render(
      <CurrentWeather location={mockLocation} weather={mockWeather} />,
    );

    expect(getByText('Current')).toBeTruthy();
    expect(getByText('Paris')).toBeTruthy();
    expect(getByText('22°')).toBeTruthy();
    expect(getByText(/feels like/i)).toBeTruthy();
    expect(getByText('Clear sky')).toBeTruthy();
    expect(getByText('High: 25° Low: 18°')).toBeTruthy();
    expect(getByText('Wind: 10 Km/h')).toBeTruthy();
    expect(getByText('Humidity: 60')).toBeTruthy();
  });
});
