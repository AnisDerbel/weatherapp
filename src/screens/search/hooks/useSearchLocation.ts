import {useState, useEffect} from 'react';
import {getCoordonatesByLocation} from '../../../services';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {setActiveLocation} from '../../../store/locationSlice';
import {Location} from '../../../services/parser';

export function useSearchLocation() {
  const dispatch: AppDispatch = useDispatch();

  const {locationHistory} = useSelector((state: RootState) => state.weather);
  const [query, setQuery] = useState<string>('');

  const [suggestedLocations, setSuggestedLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const onSetActiveLocation = (location: Location) => {
    dispatch(setActiveLocation(location));
  };
  useEffect(() => {
    if (!query) {
      setSuggestedLocations([]);
      return;
    }

    const handler = setTimeout(() => {
      const fetchLocations = async () => {
        setLoading(true);
        setError(undefined);

        try {
          const response = await getCoordonatesByLocation(query);
          setSuggestedLocations(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchLocations();
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  return {
    suggestedLocations,
    loading,
    error,
    query,
    setQuery,
    onSetActiveLocation,
    locationHistory,
  };
}
