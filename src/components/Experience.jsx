import React, { useState } from "react";
import { InputField } from "./InputField";

export function Experience(){
    const [position, setPosition] = useState('CEO')
    const [company, setCompany] = useState('RIZAP')
    const [location, setLocation] = useState('Kamurocho, Japon')
    const [time, setTime] = useState('2012 - 2020')

    const handlePositionChange = (e) => { setPosition(e.target.value) }
    const handleCompanyChange = (e) => { setCompany(e.target.value) }
    const handleLocationChange = (e) => { setLocation(e.target.value) }
    const handleTimeChange = (e) => { setTime(e.target.value) }

    return (
        <div className="exp-field">
        <label for="positionField">Cargo: </label>
            <InputField id="positionField" className="input-field" placeholder="CEO" handleChange={handlePositionChange} />
        <label for="companyField">Empresa: </label>
            <InputField id="companyField" className="input-field" placeholder="RIZAP" handleChange={handleCompanyChange} />
        <label for="cityField">Locación: </label>
            <InputField id="cityField" className="input-field" placeholder="Kamurocho, Japon" handleChange={handleLocationChange} />
        <label for="timeField">Desde - Hasta: </label>
            <InputField id="timeField" className="input-field" placeholder="2012 - 2020" handleChange={handleTimeChange} /> 
            
            {/* <h2>Experiencia:</h2>
            <p>{time}</p>
            <p>{position}</p>                                                                            
            <p>{company}</p>
            <p>{location}</p> */}
        </div>
        
    )
}