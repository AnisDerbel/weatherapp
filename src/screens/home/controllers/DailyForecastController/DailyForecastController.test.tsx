// __tests__/DailyForecastController.test.tsx

import React from 'react';
import {DailyForecastController} from './DailyForecastController';
import {useDailyForecast} from '../../hooks/useDailyForecast';
import {mockForecast} from '../../../../testing/globalMocks';
import {render} from '../../../../testing/testingLibrary';

jest.mock('../../hooks/useDailyForecast', () => ({
  useDailyForecast: jest.fn(),
}));

const mockDailyForecastComponent = jest.fn((..._args) => null);
jest.mock('../../components/DailyForecast/DailyForecast', () => ({
  DailyForecast: (props: any) => {
    mockDailyForecastComponent(props);
    return null;
  },
}));

describe('DailyForecastController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading when fetching weather', () => {
    (useDailyForecast as jest.Mock).mockReturnValue({
      loading: true,
    });

    const {getByText} = render(<DailyForecastController />);
    expect(getByText('Fetching...')).toBeTruthy();
  });

  it('renders fallback UI when grouppedForecast is missing', () => {
    (useDailyForecast as jest.Mock).mockReturnValue({
      grouppedForecast: null,
    });

    const {getByText} = render(<DailyForecastController />);
    expect(
      getByText('We are not able to get the daily forecast!'),
    ).toBeTruthy();
    expect(mockDailyForecastComponent).not.toHaveBeenCalled();
  });

  it('renders DailyForecast with correct props when data is available', () => {
    (useDailyForecast as jest.Mock).mockReturnValue({
      grouppedForecast: mockForecast,
    });

    render(<DailyForecastController />);

    expect(mockDailyForecastComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        forecast: mockForecast,
      }),
    );
  });
});
