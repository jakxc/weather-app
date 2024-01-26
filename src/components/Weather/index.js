import "./styles.css";
import humidityIcon from "../../assets/images/humidity.png";
import rainIcon from "../../assets/images/raining.png";
import windIcon from "../../assets/images/wind.png";

const Weather = ({ weather }) => {
    const InfoDelegate = ({name, value, icon, unit}) => {
        return <div className="d-flex flex-column align-items-center px-3 py-2">
            <img src={icon} className="info__icon" />
            <div>{name}</div>
            <div className="fw-bold">{value}{unit}</div>
        </div>
    }

    return (
        weather  
        ? <div className="card | d-flex flex-column align-items-center px-3 py-4">
            <img className="card__img" src={weather.current.condition.icon}/>
            <div className="card__location">{weather.location.name}, {weather.location.country}</div>
            <div className="card__temp fw-bold">{weather.current.temp_c}&#8451;</div>
            <div className="card__condition">{weather.current.condition.text}</div>
            <div className="d-flex justify-content-center gap-3 mt-2"> 
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
        : <div>Weather is not available for this location.</div>
    )
}

export default Weather;