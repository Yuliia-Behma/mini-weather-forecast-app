<template>
  <main>
    <div class="search-container">
      <input type="text" id="city" class="search-bar" placeholder="Search..." v-model="city" @keyup.enter="fetchData"/>
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

<style scoped></style>
