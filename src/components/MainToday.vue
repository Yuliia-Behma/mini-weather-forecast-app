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
        {{ (weather?.list[0].main.temp).toFixed(0) }}°C
      </div>
      <div class="icon"></div>

      <div class="description">
        {{ weather.list[0].weather[0].description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainToday",
  props: {
    weather: Object,
  },
  setup() {
    function dateCreater() {
      let d = new Date();
      let monthes = [
        "Січня",
        "Лютого",
        "Березня",
        "Квітня",
        "Травня",
        "Червня",
        "Липня",
        "Серпня",
        "Вересня",
        "Жовтня",
        "Листопада",
        "Грудня",
      ];
      let days = [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П'ятниця",
        "Субота",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = monthes[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }

    return {
      dateCreater,
    };
  },
};
</script>

<style scoped>
.today-container {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.location-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  text-shadow: 5px 5px 10px #fff, -5px -5px 10px #fff, -5px 5px 10px #fff,
    5px -5px 10px #fff;
}
.date {
  margin: 10px 0;
  font-size: 1.1rem;
}
.weather-box {
  padding: 40px 20px;
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c0047;
  background-image: radial-gradient(circle, rgba(158,255,255,0.7413340336134453) 0%, rgba(255,255,255,0) 100%);
  backdrop-filter: blur(1.5px);
  border-radius: 10px;
  width:100%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.temperature {
  font-size: 5rem;
  font-weight: 700;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-style: normal;
  /* color: #07003d; */
}
.description {
  font-size: 2rem;
}
</style>
