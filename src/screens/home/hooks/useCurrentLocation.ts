import Geolocation from '@react-native-community/geolocation';
import {getLocationByCoordonates} from '../../../services';
import {AppDispatch, RootState} from '../../../store';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveLocation} from '../../../store/locationSlice';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

const checkLocationPermission = async () => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  const result = await check(permission);
  if (result === RESULTS.DENIED) {
    return await request(permission);
  }
  return result;
};

export const useCurrentLocation = () => {
  const dispatch: AppDispatch = useDispatch();
  const {activeLocation} = useSelector((state: RootState) => state.weather);

  const getCurrentLocation = async () => {
    const permission = await checkLocationPermission();

    if (permission === RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        async position => {
          console.log('position : ', position);
          const locationDetails = await getLocationByCoordonates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          if (locationDetails?.length > 0) {
            dispatch(setActiveLocation(locationDetails[0]));
          }
        },
        err => {
          throw err;
        },
        {enableHighAccuracy: true, distanceFilter: 0, interval: 5000},
      );
    }
  };

  return {getCurrentLocation, activeLocation};
};
