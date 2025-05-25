import {useState, useEffect} from 'react';
import {getCurrentWeather} from '../../../services';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {setCurrentWeather} from '../../../store/locationSlice';
import {Location} from '../../../services/parser';

export function useCurrentWeather() {
  const dispatch: AppDispatch = useDispatch();
  const {activeLocation, currentWeather} = useSelector(
    (state: RootState) => state.weather,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async (location: Location) => {
      setLoading(true);
      setError(false);

      try {
        const data = await getCurrentWeather({
          lat: location.lat,
          lon: location.lon,
        });
        dispatch(setCurrentWeather(data));
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (activeLocation) {
      fetchWeather(activeLocation);
    }
  }, [activeLocation, dispatch]);

  return {currentWeather, activeLocation, loading, error};
}
