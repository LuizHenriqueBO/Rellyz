<template>
  <div>
    <p>{{city}}</p>
  </div>
</template>

<script>
import getWeatherByName from '../services/cityWeather';

export default {
  name: 'Weather',
  props: ['city'],
  watch: {
    city: (self) => {
      getWeatherByName(self)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
