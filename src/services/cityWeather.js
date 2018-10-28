import axios from 'axios';

const api = 'http://apiadvisor.climatempo.com.br/api/v1/';
const token = '77be901565e8570d4140d9336a0edd5c';

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
