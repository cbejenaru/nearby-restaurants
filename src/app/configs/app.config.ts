import { environment } from '../../environments/environment';

export const venues = `${environment.host}/venues/explore`;
export const oauthToken = 'NKRP0KY5ZDZIBMCU3TZS4BMP4ZMIQZBQPLBTCPXSIGPWFJ1L';
export const initCoords = {
  lat: 47.016756,
  lng: 28.836708
};

export const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser':
    'Browser does not support location services',
  'errors.location.permissionDenied':
    'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};
