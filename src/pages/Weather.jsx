import './Weather.css'
import { Header } from '../components/Header'
import { useState } from 'react'

export function Weather() {

  const [city, setCity] = useState('[City Name]');
  const [temp, setTemp] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [emoji, setEmoji] = useState("❓");
  const [desc, setDesc] = useState("-- Description --");
  const [error, setError] = useState(null);

  const [inputValue, setInputValue] = useState("");

  function displayError(errorMessage) {
    setError(errorMessage);
    setCity("[City Name]");
    setTemp("--");
    setHumidity("--");
    setEmoji("❓");
    setDesc("--Description--");
  }

  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  async function getCityCords() {

    if (!inputValue.trim()) {
      displayError("Please enter a city name");
      return;
    }
    setError(null);

    const APIkey = '2070b6f0bae493cb3921f1f5f4eb97ac';
    const geoCodingURL = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${APIkey}`

    try {
      const response = await fetch(geoCodingURL);
      const data = await response.json();

      if (!data || data.length === 0) {
        displayError("City Not Found");
        return;
      } else {
        setCity(capitalize(inputValue));
        const lat = data[0].lat;
        const lon = data[0].lon;
        updateWeatherData(lat, lon);
      }
    } catch (err) {
      displayError("Failed to fetch data");
      console.log(err);
      return;
    }

  }

  async function updateWeatherData(lat, long) {
    const APIkey = '2070b6f0bae493cb3921f1f5f4eb97ac';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setTemp((data.main.temp - 273.15).toFixed(1));
      setHumidity(data.main.humidity);
      setDesc(data.weather[0].description)
      setEmoji(chooseEmoji(data.weather[0].id));
    } catch (err) {
      displayError("Failed to fetch data");
      console.log(err);
      return;
    }


  }

  function chooseEmoji(id) {
    if (id === 800) {
      return "☀️";
    } else if (id > 800 && id < 810) {
      return "☁️"
    } else if (id >= 200 && id < 300) {
      return "⛈️"
    } else if (id >= 300 && id < 400) {
      return "🌦️";
    } else if (id >= 500 && id < 600) {
      return "🌧️";
    } else if (id >= 600 && id < 700) {
      return "❄️";
    } else if (id > 700 && id < 800) {
      if (id === 781) {
        return "🌪️";
      } else {
        return "🌫️";
      }
    } else {
      return "❓";
    }
  }

  return (
    <>
      <title>React Projects - Weather</title>
      <Header />
      <div className='main'>
        <h1>CHECK THE WEATHER IN YOUR CITY</h1>
        <div className='input-area'>
          <input type="text" className='input-box' value={inputValue} onChange={(e) => {
            setInputValue(e.target.value);
            if (error) setError(null);
          }} placeholder='City Name' />
          <button className='btn' onClick={getCityCords}>GET WEATHER</button>
        </div>

        {error && (
          <div className='err-box'>
            <p className='err-message'>
              ERROR : {error}
            </p>
            <p className='err-support'>Couldn't get data</p>
          </div>
        )}

        {!error && (
          <div className='card'>
            <p className='city-name'>{city}</p>
            <div className='data-div'>
              <p className='temperature'>{temp}°C</p>
              <p className='humidity'>Humidity : {humidity}%</p>
            </div>

            <div className='desc-div'>
              <p className='desc'>{desc}</p>
              <p className='emoji'>{emoji}</p>
            </div>

          </div>
        )}

      </div>
    </>
  )
}