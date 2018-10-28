<template>
  <div>
    <div class="container">
      <p>{{addressData.citySearched}} - {{addressData.stateSearched}}</p>
    </div>
  </div>
</template>

<script>
import { getIdByCityName, getWeatherByName } from '../services/cityWeather';

export default {
  name: 'Weather',
  props: ['addressData'],
  watch: {
    addressData: (self) => {
      console.log('self', self);
      getIdByCityName(self.citySearched, self.stateSearched)
        .then((responseId) => {
          console.log(responseId);
          getWeatherByName(responseId.id)
            .then((responseData) => {
              console.log(responseData);
            });
        });
    },
  },
};
</script>
