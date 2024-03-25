<template>
 <div class="container">
  <div class="temperature">
    {{ Math.round(item.main.temp) }} °C
  </div>
  <div class="details">
    <div class="time-date">
      {{ convertTimestamp(item.dt) }}
      <img id="time-icon" src="../assets/time-icon.png" alt="time-icon" width="30">
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
  padding: 5px;
  display: flex;
  align-items: center;
  color: #2c0047;
  background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(158,255,255,0.7413340336134453) 9%, rgba(158,255,255,0.6082808123249299) 58%, rgba(255,255,255,0) 100%);
  backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.temperature{
    font-size: 2rem;
  font-weight: 700;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-style: normal;
  padding-right: 10px;
  padding: 15px;
}
.details{
  padding-left: 20px;
  padding: 15px;
  color: #000;
  border-left: 1px solid #fff;
}
.time-date{
  font-size: 1.1rem;
  font-weight: 700;
  position: relative;
}
.weather-status{
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 10px;
}
#time-icon{
  position: relative;
  right: 0;
  bottom: -5px;
}
</style>
