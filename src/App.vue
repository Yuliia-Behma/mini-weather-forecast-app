<template>
  <h1>Current weather</h1>
  <SearchCity></SearchCity>
  <NavFooter></NavFooter>
</template>

<script>
import SearchCity from './components/SearchCity.vue';
import NavFooter from './components/NavFooter.vue';

export default {
  name: 'App',
  components: {
    SearchCity,
    NavFooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
}
#app{
  height: 100%;
}
a{
  text-decoration: none;
}
h1{
  text-align: center;
}
</style>
