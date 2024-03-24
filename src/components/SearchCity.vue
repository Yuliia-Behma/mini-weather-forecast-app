<template>
  <main>
    <div class="search-container">
      <input type="text" id="city" class="search-bar" placeholder="Search..." v-model="city" @keyup.enter="fetchData" />
    </div>
    <RouterView :weather="weather"></RouterView>
  </main>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useWeatherStore } from "@/store";

export default defineComponent({
  name: "SearchCity",
  setup() {
    const city = ref('');
    const store = useWeatherStore()
    const weather = computed(() => store.weatherData)
    

    function fetchData() {
      store.getWeatherData(city.value)
    }


    return {
      city,
      weather,
      fetchData
    }
  }
});
</script>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.search-container{
  width: 100%;
}
#city{
  width: 100%;
  padding: 13px 20px;
  border-radius: 30px;
  font-size: 20px;
  border: 1px solid #0bbec791;
  color:#024783;
  font-weight: 500;
  background-color: rgba(240, 248, 255, 0.629);
  backdrop-filter: blur(2px);
}
#city:focus-visible{
  border: 1px solid #d3a0ffa1;
  outline: 1px solid #8b5df6;
}
</style>
