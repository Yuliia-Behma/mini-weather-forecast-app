import axios from "axios";

const API_KEY = "b794591b93fadf81745f233b7972319b";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const COUNT_OF_TIMESTAMPS = 40;

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&cnt=${COUNT_OF_TIMESTAMPS}&lang=ua&appid=${API_KEY}&units=metric`)
}