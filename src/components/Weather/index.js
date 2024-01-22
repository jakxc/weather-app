import "./styles.css"

const Weather = ({ weather }) => {
    return (
        weather  
        ? <div className="card | d-flex flex-column align-items-center gap-2 px-3 py-4">
            <div className="display-4 fw-bold">{weather.current.temp_c}</div>
            <div className="d-flex flex-column align-items-center">
                <p className="display-6">{weather.location.name}</p>
                <p>{weather.location.country}</p>
            </div>
            <p className="card__condition">{weather.current.condition.text}</p>
           <img className="card__img" src={weather.current.condition.icon}/>
        </div> 
        : <div>Weather is not available for this location.</div>
    )
}

export default Weather;