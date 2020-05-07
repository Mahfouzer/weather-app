import React, { usestate, useState } from "react";
import { Element } from "react-scroll";
import axios from "axios";

export default function YourWeather() {
  const [loading, setLoading] = useState(false);
  const [errorFetching, seErrorFetching] = useState({
    hasError: false,
    body: "",
  });
  const [myCity, setCity] = useState("");
  const [myCityWeather, setCityWeather] = useState("");
  const [successFetch, setSuccessFetch] = useState(false);

  const renderWeatherInfo = () => {
    return (
      <>
        <img
          src={` http://openweathermap.org/img/wn/${myCityWeather[4]}@2x.png`}
        ></img>
        <p className='main-text'>{myCity}</p>
        <p>
          overall: <span className='weather-data'> {myCityWeather[0]} </span>
        </p>
        <p>
          min temp: <span className='weather-data'> {myCityWeather[1]} </span>
        </p>
        <p>
          max temp: <span className='weather-data'> {myCityWeather[2]} </span>
        </p>
        <p>
          humidity: <span className='weather-data'> {myCityWeather[3]} </span>
        </p>
      </>
    );
  };

  const handleCitySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessFetch(false);
    setCityWeather("");
    seErrorFetching({ hasError: false, body: "" });

    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${myCity.toLowerCase()}&units=metric&APPID=48f41c1f76a9895f24b2d957edfb5111`
      );
      const { data } = res;
      setCityWeather([
        data.weather[0].main,
        data.main.temp_min,
        data.main.temp_max,
        data.main.humidity,
        data.weather[0].icon,
      ]);
      console.log(data);
      setSuccessFetch(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      seErrorFetching({ hasError: true, body: err.response.data.message });
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    seErrorFetching({ hasError: false, body: "" });
    setSuccessFetch(false);
    setCity(e.target.value.toUpperCase());
  };

  return (
    <Element name='Weather' className='weather'>
      <p className='main-text'>Just type the city name</p>
      <p className='secondary-text'>the spelling is a critical thing</p>

      <form
        onSubmit={(e) => {
          handleCitySubmit(e);
        }}
      >
        <input
          type='text'
          onChange={(e) => handleCityChange(e)}
          value={myCity}
        />
        <input type='submit' value='find' />
      </form>

      {successFetch && myCityWeather !== "" && (
        <div className='weather-info'>{renderWeatherInfo()}</div>
      )}

      {loading && <h2 style={{ color: "yellow" }}>Loading...</h2>}

      {errorFetching.hasError && (
        <h2 style={{ color: "red" }}>{errorFetching.body}</h2>
      )}
    </Element>
  );
}
