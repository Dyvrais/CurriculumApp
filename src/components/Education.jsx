import React, { useState } from "react";
import { InputField } from "./InputField";

export function Education(){
    const [institution, setinstitution] = useState('Harvard')
    const [city, setCity] = useState('Cambridge')
    const [degree, setDegree] = useState('Analista de datos')
    const [time, setTime] = useState('2008 - 2011')

    const handleInstitutionChange = (e) => { setinstitution(e.target.value) }
    const handleCityChange = (e) => { setCity(e.target.value) }
    const handleDegreeChange = (e) => { setDegree(e.target.value) }
    const handleTimeChange = (e) => { setTime(e.target.value) }

    return (
        <>
        <label for="institutionField">Institución: </label>
            <InputField id="institutionField" className="input-field" placeholder="Harvard" handleChange={handleInstitutionChange} />
        <label for="cityField">Ciudad: </label>
            <InputField id="cityField" className="input-field" placeholder="Cambridge" handleChange={handleCityChange} />
        <label for="degreeField">Titulo: </label>
            <InputField id="degreeField" className="input-field" placeholder="Analista de datos" handleChange={handleDegreeChange} />
        <label for="timeField">Desde - Hasta: </label>
            <InputField id="timeField" className="input-field" placeholder="2008 - 2011" handleChange={handleTimeChange} /> 
            
            <h2>Educación:</h2>
            <p>{time}</p>
            <p>{institution}</p>                                                                            
            <p>{city}</p>
            <p>{degree}</p>
        </>
        
    )
}