import {useState, useEffect, useMemo} from 'react';
import {getDailyForcast} from '../../../services';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {setDailyForecast} from '../../../store/locationSlice';
import {ForeCast, getTime, Location} from '../../../services/parser';

export function useDailyForecast() {
  const dispatch: AppDispatch = useDispatch();
  const {activeLocation, dailyForecast} = useSelector(
    (state: RootState) => state.weather,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const grouppedForecast = useMemo(() => {
    if (dailyForecast) {
      return groupForecastByDay(dailyForecast);
    }

    return null;
  }, [dailyForecast]);

  useEffect(() => {
    const fetchDailyForecast = async (location: Location) => {
      setLoading(true);
      setError(false);

      try {
        const data = await getDailyForcast({
          lat: location.lat,
          lon: location.lon,
        });
        dispatch(setDailyForecast(data));
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (activeLocation) {
      fetchDailyForecast(activeLocation);
    }
  }, [activeLocation, dispatch]);

  return {grouppedForecast, loading, error};
}

export function groupForecastByDay(forecastList: ForeCast[]) {
  const grouped: Record<string, ForeCast[]> = {};

  forecastList.forEach(item => {
    const date = new Date(item.date);
    const day = date.toLocaleDateString('en-US', {weekday: 'long'});

    if (!grouped[day]) {
      grouped[day] = [];
    }

    grouped[day].push({
      ...item,
      date: getTime(item.date),
    });
  });

  // Convert to array of arrays with day title
  return Object.entries(grouped).map(([day, items]) => ({
    title: day,
    data: items,
  }));
}
