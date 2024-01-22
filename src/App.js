import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Header from './components/Header';
import Weather from "./components/Weather";

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState();

  const getCurrentWeatherByQuery = (myQuery) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${myQuery || "Brisbane"}&aqi=no`;
    return fetch(url)
      .then(res => res.json())
  }

  useEffect(() => {
    setLoading(true);
    getCurrentWeatherByQuery(query)
    .then(data => {
      console.log(data);
      setWeather(data)
    })
    .catch(error => setError(error.message))
    .finally(setLoading(false))
  }, [query]);

  return (
    <div className="App">
      <Header 
        onQueryChange={(myQuery) => setQuery(myQuery)}
      />
      {(!loading && !error) 
      ? <Weather 
        weather={weather}
      /> 
      : <p>Error: {error}</p>}
    </div>
  );
}

export default App;
