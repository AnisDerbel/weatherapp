import React from 'react';

jest.mock('../../hooks/useCurrentWeather', () => ({
  useCurrentWeather: jest.fn(),
}));

import {useCurrentWeather} from '../../hooks/useCurrentWeather';
import {CurrentWeatherController} from './CurrentWeatherController';
import {render} from '../../../../testing/testingLibrary';
import {mockLocation, mockWeather} from '../../../../testing/globalMocks';

const mockCurrentWeatherComponent = jest.fn((..._args) => null);

jest.mock('../../components/CurrentWeather/CurrentWeather', () => ({
  CurrentWeather: (props: any) => {
    mockCurrentWeatherComponent(props);
    return null;
  },
}));

describe('CurrentWeatherController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading when fetching weather', () => {
    (useCurrentWeather as jest.Mock).mockReturnValue({
      loading: true,
    });

    const {getByText} = render(<CurrentWeatherController />);
    expect(getByText('Fetching...')).toBeTruthy();
  });
  it('renders fallback UI when currentWeather or activeLocation is missing', () => {
    (useCurrentWeather as jest.Mock).mockReturnValue({
      currentWeather: null,
      activeLocation: null,
    });

    const {getByText} = render(<CurrentWeatherController />);
    expect(
      getByText('We are not able to get the current weather!'),
    ).toBeTruthy();
  });

  it('renders CurrentWeather when data is available', () => {
    (useCurrentWeather as jest.Mock).mockReturnValue({
      currentWeather: mockWeather,
      activeLocation: mockLocation,
    });

    const {queryByText} = render(<CurrentWeatherController />);

    expect(mockCurrentWeatherComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        weather: mockWeather,
        location: mockLocation,
      }),
    );

    expect(
      queryByText('We are not able to get the current weather!'),
    ).toBeNull();
  });
});
