import axios from "axios";

const API_KEY = "771632a3dab14c7e8daa663d26c3a30a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}