import "./styles.css";
import humidityIcon from "../../assets/images/humidity.png";
import rainIcon from "../../assets/images/raining.png";
import windIcon from "../../assets/images/wind.png";

const Weather = ({ weather }) => {
    const InfoDelegate = ({ name, value, icon, unit }) => {
        return <div className="d-flex flex-column align-items-center px-3 py-2">
            <img src={icon} className="info__icon" />
            <div>{name}</div>
            <div className="fw-bold">{value}{unit}</div>
        </div>
    }

    const ForecastDelegate = ({ forecast }) => {
        const forecastElements = forecast.map(el => {
                return el["hour"].map(e => {
                    const { time, condition, temp_c } = e;
                    const date = new Date(time);
                    const formattedTime = `${date.getHours() % 12 ? date.getHours() % 12 : 12} ${date.getHours() >= 12 ? "PM" : "AM"}`    
                    return <div className="forecast__delegate | d-flex flex-column justify-content-center align-items-center">
                        <div>{formattedTime}</div>
                        <img src={condition.icon}/>
                        <div>{temp_c}&#176;</div>
                    </div>
                })
        })

        return <div className="w-100 d-flex flex-row gap-2 justify-content-center p-3 overflow-auto">
            {forecastElements}
        </div>
    }

    return (
        weather  
        ? <div className="card | w-100 h-100 d-flex flex-column justify-content-between align-items-center pt-4 gap-3">
            <div className="d-flex flex-column align-items-center gap-2 mb-3">
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
            <div className="forecast | w-100 h-100 pt-4 px-3"><ForecastDelegate forecast={weather.forecast.forecastday}/></div>
        </div> 
        : <div>Weather is not available for this location.</div>
    )
}

export default Weather;