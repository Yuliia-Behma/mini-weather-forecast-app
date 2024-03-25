<template>
  <h1>Прогноз погоди</h1>
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
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
body{
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  background-image: url("./assets/bg.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
#app{
  height: 100%;
}
a{
  text-decoration: none;
}
h1{
  text-align: center;
  /* font-weight: 700; */
  color: #c50097;
  padding: 30px 0 10px;
  font-size: 3rem;
  font-family: "Rubik Gemstones", system-ui;
  font-weight: 400;
  font-style: normal;
  text-shadow: 2px 2px 10px #ffffffbb,
  -2px -2px 10px #fff,
  -2px 2px 10px #fff,
  2px -2px 10px #fff;
}
</style>
