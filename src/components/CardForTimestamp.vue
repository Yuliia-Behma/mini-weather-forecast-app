<template>
 <div class="container">
  <div class="temperature">
    {{ Math.round(item.main.temp) }} С
  </div>
  <div class="details">
    <div class="time-date">
      {{ convertTimestamp(item.dt) }}
    </div>
    <div class="weather-status">
      {{ item.weather[0].description }}
    </div>
  </div>
 </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardForTimestamp",
  props: {
    item: Object
  },
  setup() {
    function convertTimestamp(dt) {
      let monthes = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
      let daysOfWeek = ["Нд", "Пн", "Вт", "Ср", "Чтв", "Птн", "Сб"];
      let date = new Date(dt * 1000);
      let day = date.getDate();
      let dayOfWeek = daysOfWeek[date.getDay()];
      let month = monthes[date.getMonth()];
      let hours = date.getHours();
      let minutes = ("0" + date.getMinutes()).substring(-2);

      return `${dayOfWeek} ${day} ${month} | ${hours}:${minutes}`
   }
    return {
     convertTimestamp
    }
  }
});
</script>

<style scoped>
.container{
  border: 1px solid black;
  padding: 10px;
  display: flex;
}
</style>
