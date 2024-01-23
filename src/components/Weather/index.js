import "./styles.css"

const Weather = ({ weather }) => {
    const InfoDelegate = ({name, value, unit}) => {
        return <div className="d-flex flex-column align-items-center px-3 py-2">
            <div>{name}</div>
            <div className="fw-bold">{value}{unit}</div>
        </div>
    }

    return (
        weather  
        ? <div className="card | d-flex flex-column align-items-center gap-2 px-3 py-4">
            <p className="card__location">{weather.location.name}, {weather.location.country}</p>
            <div className="d-flex flex-column align-items-center">
                <img className="card__img" src={weather.current.condition.icon}/>
                <p className="card__condition">{weather.current.condition.text}</p>
            </div>
            <div className="card__temp fw-bold">{weather.current.temp_c}&#8451;</div>
            <div className="d-flex justify-content-center gap-3"> 
                <InfoDelegate name="Humidity" value={weather.current.humidity} unit="%" />
                <InfoDelegate name="Wind" value={weather.current.wind_kph} unit="km/hr" />
                <InfoDelegate name="Precipation" value={weather.current.precip_in} unit="%" />
            </div>
        </div> 
        : <div>Weather is not available for this location.</div>
    )
}

export default Weather;