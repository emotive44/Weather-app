import axios from 'axios';


export const axiosSettings = () => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}
