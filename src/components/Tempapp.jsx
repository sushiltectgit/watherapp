import React, { useState, useEffect } from 'react';
import "./css/style.css";
import ReactDOM from 'react-dom';



const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fatchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7c2c549d3372dde7304ba9caf2d0c4ea`;
            const response = await fetch(url);
            //console.log(response);
            const resjson = await response.json();
            console.log(resjson.main);
            setCity(resjson.main);
        }
        fatchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div>
                    <input type="search" name="" id="" className="inputField" onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
                </div>
                {
                    (!city) ? (<p>City Not Found</p>) : (

                        <div>
                            <div className="info">
                                <h2 className="location"></h2>
                                <i className="fa fa-street-view" aria-hidden="true">{search}</i>
                                <h1 className="temp">{city.main.temp}</h1>
                                <h3 className="tempmin_max">10 cent</h3>

                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }
            </div>

        </>

    );
}

export default Tempapp;