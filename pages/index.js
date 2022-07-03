import React, { useState, useEffect } from "react";
import Axios from "axios";
import WeatherForm from "../components/WeatherForm";
import WeatherButtons from "../components/WeatherButtons";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloudIcon from "../assets/cloudy.svg";
import mainStyles from "../styles/Home.module.scss";

const api = {
  key: process.env.NEXT_PUBLIC_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const search = (e) => {
    e.preventDefault();

    setLoading(true);
    Axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => {
        setLoading(false);
        setWeather(res.data);
        setQuery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
  };

  useEffect(() => {
    typeof weather.main !== "undefined"
      ? weather.main.temp > 16
        ? (document.getElementsByTagName("body")[0].className =
            mainStyles["bg-warm"])
        : (document.getElementsByTagName("body")[0].className =
            mainStyles["bg-cool"])
      : (document.getElementsByTagName("body")[0].className =
          mainStyles["bg-main"]);
  }, [weather]);

  return (
    <div>
      <WeatherForm search={search} setQuery={setQuery} query={query} />
      <div className={mainStyles["weather-content-wrapper"]}>
        <div className={mainStyles["weather-content"]}>
          {loading ? (
            <div className={mainStyles["weather-loading"]}>
              <CircularProgress />
              <h2>Searching City/Country</h2>
            </div>
          ) : (
            <div>
              {typeof weather.main !== "undefined" ? (
                <div>
                  <div>
                    <h1 className={mainStyles["weather-place"]}>
                      {weather.name}, {weather.sys.country}
                    </h1>
                    <h2 className={mainStyles["weather-date"]}>
                      {dateBuilder(new Date())}
                    </h2>
                  </div>
                  <div>
                    <h1 className={mainStyles["weather-temp"]}>
                      {Math.round(weather.main.temp)}°C
                    </h1>
                    <img
                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                      alt="Weather Icon"
                      style={{ width: "5em" }}
                    />
                    <h1 className={mainStyles["weather-status"]}>
                      {weather.weather[0].main}
                    </h1>
                  </div>
                  <WeatherButtons weather={weather} />
                </div>
              ) : (
                <div className={mainStyles["weather-main-menu"]}>
                  <div className={mainStyles["weather-main-title"]}>
                    <h1>Welcome to FindWeather!</h1>
                    <img src={CloudIcon} alt="Cloud Icon" />
                  </div>
                  <div className={mainStyles["weather-main-subtitle"]}>
                    <h1>Search a City/Country to get started!</h1>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
