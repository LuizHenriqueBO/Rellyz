import axios from 'axios';

const api = 'http://apiadvisor.climatempo.com.br/api/v1/';
const token = 'token';

const getIdByCityName = () => {
  const result = axios.get(`${api}locale/city`, {
    params: {
      name: 'Curitiba',
      state: 'PR',
      token,
    },
  });
  return result;
};


const getWeatherByName = () => {
  const result = axios.get(`${api}locale/`, {
    params: {
      name: 'Curitiba',
      token,
    },
  });
  return result;
};

export { getIdByCityName, getWeatherByName };
