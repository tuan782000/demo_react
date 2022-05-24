import WeatherState from "./WeatherState";
import './Child.scss'
const WeatherDay = (props) => {
    const dataWeather = 
    {

    };
    return (
        <div className="weather-day-container">
            <div className="date">Sat 1 Jan</div>
            <div className="state">
                <WeatherState
                    weatherState = {dataWeather.weather_state_name}/>
            </div>
            <div className="max">
                Max 18 C
            </div>
            <div className="min">
                Min 14 C
            </div>
            <div className="wind">
                4mph
            </div>
        </div>
    )
}

export default WeatherDay; 