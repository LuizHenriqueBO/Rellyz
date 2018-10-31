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
    addressData: {
      handler(val) {
        console.log(val, 'val');
        getIdByCityName(this.citySearched, this.stateSearched)
          .then((responseId) => {
            console.log(responseId);
            getWeatherByName(responseId.id)
              .then((responseData) => {
                console.log(responseData);
              });
          });
      },
      deep: true,
    },
  },
};
</script>
