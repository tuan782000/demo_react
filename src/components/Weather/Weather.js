import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import './Weather.scss';
import _ from 'lodash';
const Weather = () => {
    const [title, setTitle] = useState("");
    useEffect(async () => {
        console.log(">>> run use effect")
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: 'https://www.metaweather.com/api/location/1236594/' },
        });
        setTimeout(() => {
            setTitle(response.data.title)
        }, 3000)
    });

    console.log("run render")
    return (
        <div className="weather-app-container">
            <Search/>
            <div className="error">The current metaweather app site is dead so My website can't call the api. Please give me some time to fix it. Sorry for the inconvenience </div>
        </div>
    )
}


// class Weather extends React.Component {
//     constructor(props){
//         super(props);
//         console.log(">>> run constructor: 000")
//         this.state = {
//             title: ""
//         }
//     }
//     async componentDidMount(){
//         console.log(">>> run didmount")
//         // let data = await axios.get("https://www.metaweather.com/api/location/1236594/")

//         let response = await axios ({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: {url: 'https://www.metaweather.com/api/location/1236594/'},
//         });
//         setTimeout(()=> {
//             this.setState({
//                 title: response.data.title
//             })
//         },3000)
//         // console.log(">>> Check data: ", response.data);

//     }


//     render(){
//         console.log(">>> run render: ")
//         return(
//             <div>indside weather component</div>
//         )
//     }
// }
export default Weather; 