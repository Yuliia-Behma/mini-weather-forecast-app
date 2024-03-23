<template>
  <div v-if="weather?.main" class="today-container">
    <div class="location-box">
      {{ weather?.name }}, {{ weather?.sys.country }}
      <div class="date">
        {{ dateCreater() }}
      </div>
    </div>
    <div class="weather-box">
      <div class="temperature">
        {{ (weather?.main.temp).toFixed(0) }} C
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainToday',
  props: [ 'weather'],
  setup() {
    function dateCreater() {
      let d = new Date();
      let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = monthes[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }

    return {
      dateCreater
    }
  }
  
}
</script>

<style scoped>

</style>
