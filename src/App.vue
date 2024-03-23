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
}
body{
  height: 100vh;
  max-width: 600px;
}
#app{
  height: 100%;
}
h1{
  text-align: center;
}
</style>
