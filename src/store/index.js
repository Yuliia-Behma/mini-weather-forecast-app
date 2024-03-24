import { defineStore } from "pinia";
import { getWeatherData } from "@/api";

export const useWeatherStore = defineStore({
    id: 'weather',
    state: () => ({
        city: '',
        weatherData: {}
    }),
    actions: {
        async getWeatherData(city) {
            try {
            const response = await getWeatherData(city)
            this.weatherData = response.data;
            console.log("Weather Data:", this.weatherData);
            this.city = city;
            } catch(error) {
                console.error(error);
                alert("Невірно введена назва міста")
            }
        }
    }
})