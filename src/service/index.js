import axios from 'axios';
import {makeUseAxios} from 'axios-hooks';

const token = 12345;

const defaultAxios = makeUseAxios({
  axios: axios.create({
    baseURL: 'https://api.dagangan.xyz',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }),
});

const useAxios = (url) => {
  return defaultAxios(url);
};

export default useAxios;
