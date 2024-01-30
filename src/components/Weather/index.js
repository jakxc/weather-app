import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./styles.css";
import humidityIcon from "../../assets/images/humidity.png";
import rainIcon from "../../assets/images/raining.png";
import windIcon from "../../assets/images/wind.png";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6
    }
  };


const Weather = ({ weather }) => {
    const InfoDelegate = ({ name, value, icon, unit }) => {
        return <div className="d-flex flex-column align-items-center px-3 py-2">
            <img src={icon} className="info__icon" />
            <div>{name}</div>
            <div className="fw-bold">{value}{unit}</div>
        </div>
    }

    const ForecastRow = ({ forecast }) => {
        const currentDate = new Date();
        const forecastElements = forecast.map(el => {
            return el["hour"].map(e => {
                const { time, condition, temp_c } = e;
                const date = new Date(time);

                const styles = {
                    backgroundColor: currentDate.getHours() === date.getHours() 
                    ? "rgba(54, 110, 124, 0.4)" 
                    : "rgba(54, 110, 124, 0.2)"
                }
    
                const formattedTime = `${date.getHours() % 12 ? date.getHours() % 12 : 12} ${date.getHours() >= 12 ? "PM" : "AM"}`    
                return <div style={styles} className="forecast__delegate | d-flex flex-column justify-content-center align-items-center me-2 p-2">
                    <div className="forecast__delegate__time">{date.getHours() === currentDate.getHours() ? "Now" : formattedTime}</div>
                    <img src={condition.icon} className="mb-3" />
                    <div className="forecast__delegate__temp">{temp_c}&#176;</div>
                </div>
            })
        })

        console.log(forecastElements);

        return <Carousel responsive={responsive} className="w-100 d-flex flex-row justify-content-center p-3">
            {forecastElements}
        </Carousel>
    }

    return (
        weather  
        ? <div className="card | w-100 d-flex flex-column justify-content-between align-items-center pt-3 gap-2">
            <div className="h-100 d-flex flex-column align-items-center gap-2">
                <img className="card__img" src={weather.current.condition.icon}/>
                <div className="card__location">{weather.location.name}, {weather.location.country}</div>
                <div className="card__temp fw-bold">{weather.current.temp_c}&#8451;</div>
                <div className="card__condition">{weather.current.condition.text}</div>
                <div className="d-flex justify-content-center gap-3"> 
                    <InfoDelegate 
                        name="Humidity" 
                        value={weather.current.humidity} 
                        icon={humidityIcon} 
                        unit="%" 
                    />
                    <InfoDelegate 
                        name="Wind" 
                        value={weather.current.wind_kph} 
                        icon={windIcon}
                        unit="km/hr" 
                    />
                    <InfoDelegate 
                        name="Precipation" 
                        value={weather.current.precip_mm} 
                        icon={rainIcon}
                        unit="mm" 
                    />
                </div>
            </div>
            <div className="forecast | w-100 d-flex justify-content-center align-items-center pt-4 px-3"><ForecastRow forecast={weather.forecast.forecastday}/></div>
        </div> 
        : <div>Weather is not available for this location.</div>
    )
}

export default Weather;