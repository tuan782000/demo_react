import {
    useHistory,
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";
import WeatherDay from "./Child/WeatherDay";

const WeatherByLocation = () => {
    const {woeid} = useParams();
    const [locationWeather, setLocationWeather] = useState({})
    let history = useHistory();

    useEffect(() => {
        getWeatherByLocation();
    }, []);
    const getWeatherByLocation = async() => {
        let response = await axios({
            method: 'post',
            url: "",
            data: { url: `` },
        });
        if(response && response.data) {
            setLocationWeather(response.data)
        }
    }

    const handleback = ()=> {
        history.push("/weather")
    }
    return (
        <div className="w-b-l-container">
            {/* {JSON.stringify(locationWeather)} */}
            <div className="back">
                <span onClick={() => handleback()}>--Back--</span>
            </div>
            {/* <WeatherState
                weatherState={""}
            /> */}
            <WeatherDay/>
        </div>
    )
}

export default WeatherByLocation;