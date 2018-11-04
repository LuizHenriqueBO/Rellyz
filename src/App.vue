<template>
  <div id="app">
    <Header></Header>
    <Search
      @setSearchCity="setSearchCity"
      @setSearchState="setSearchState"
      @searchResult="searchResult">
    </Search>
    <Weather v-bind:addressData="searchedData"></Weather>
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
      stateName: '',
      searchedData: {
        citySearched: '',
        stateSearched: '',
      },
    };
  },
  methods: {
    setSearchCity(result) {
      this.cityName = result;
    },
    setSearchState(result) {
      this.stateName = result;
    },
    searchResult() {
      this.searchedData.citySearched = this.cityName;
      this.searchedData.stateSearched = this.stateName;
    },
  },
};
</script>
