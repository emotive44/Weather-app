import { 
  GET_CITY, 
  GET_CITY_ERROR,
  GET_CITY_LOADING, 
  GET_CITY_SUCCESS,
} from '../types';


const initialState = {
  city: {
    name: '',
    lat: 0,
    lng: 0,
  },
  err: '',
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CITY:
      return {
        ...state,
        city: { ...payload },
      };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        err: '',
        loading: false,
      }
    case GET_CITY_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_CITY_ERROR:
      return {
        ...state,
        loading: false,
        err: payload.err
      }
    default:
      return state;
  }
}
