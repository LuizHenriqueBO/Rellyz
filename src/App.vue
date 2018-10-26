<template>
  <div id="app">
    <Header></Header>
    <Search @setSearchCity="setSearchCity" @searchResult="searchResult"></Search>
    <Weather v-bind:city="citySearched"></Weather>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Weather from './components/Weather.vue';

export default {
  name: 'app',
  components: {
    Header,
    Search,
    Weather,
  },
  data() {
    return {
      cityName: '',
      citySearched: '',
    };
  },
  methods: {
    setSearchCity(result) {
      this.cityName = result;
    },
    searchResult() {
      this.citySearched = this.cityName;
    },
  },
};
</script>
