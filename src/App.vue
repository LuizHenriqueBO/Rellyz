<template>
  <div id="app">
    <Header></Header>
    <Search @setSearch="setSearch"></Search>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';

export default {
  name: 'app',
  components: {
    Header,
    Search,
  },
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    setSearch(result) {
      this.cityName = result;
    },
  },
};
</script>
