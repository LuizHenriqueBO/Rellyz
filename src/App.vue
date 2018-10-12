<template>
  <div id="app">
    <Header></Header>
    <Search></Search>
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
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
