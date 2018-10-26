import axios from 'axios';

const api = 'http://apiadvisor.climatempo.com.br/api/v1/';
const token = 'gerartoken';
const getWeatherByName = () => {
  const result = axios.get(`${api}locale/`, {
    params: {
      name: 'Curitiba',
      token,
    },
  });
  return result;
};

export default getWeatherByName;
