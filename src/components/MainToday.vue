<template>
  <div v-if="weather?.list" class="today-container">
    <div class="location-box">
      {{ weather?.city.name }}, {{ weather?.city.country }}
      <div class="date">
        {{ dateCreater() }}
      </div>
    </div>
    <div class="weather-box">
      <div class="temperature">
        {{ (weather?.list[0].main.temp).toFixed(0) }} C
      </div>
      <div class="icon">
      </div>
      
        <div class="description">
          {{ weather.list[0].weather[0].description}}
          
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainToday',
  props:
    {
    weather: Object,
    },
  setup() {
  

    function dateCreater() {
      let d = new Date();
      let monthes = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
      let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
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
