import axios from 'axios';

import { 
  GET_CITY, 
  GET_CITY_ERROR,
  GET_CITY_LOADING, 
  GET_CITY_SUCCESS,
} from '../types';
import env from '../../config/env';


export const setCity = (city) => async (dispatch) => {
  if(!city) { return; }

  try {
    dispatch({ type: GET_CITY_LOADING });

    const res = await axios.get(`${env.GOOGLE_MAPS_URL}?address=${city}&key=${env.GOOGLE_MAPS_KEY}`);

    const { lat, lng } = res.data.results[0].geometry.location;

    dispatch({
      type: GET_CITY,
      payload: {
        lat,
        lng,
        name: city
      },
    });

    dispatch({ type: GET_CITY_SUCCESS });
  } catch (err) {
    dispatch({
      type: GET_CITY_ERROR,
      payload: { 
        err: err.response.data.error_message
      }
    });
  }
};
