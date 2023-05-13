import React, { useState } from "react";
import { InputField } from "./InputField";

export function Education(props){
    return (
        <div className="education-field">
            <label for="institutionField">Institución: </label>
                <InputField id="institutionField" className="input-field" placeholder="Harvard" handleChange={props.handleInstitutionChange} />
            <label for="cityField">Ciudad: </label>
                <InputField id="cityField" className="input-field" placeholder="Cambridge" handleChange={props.handleCityChange} />
            <label for="degreeField">Titulo: </label>
                <InputField id="degreeField" className="input-field" placeholder="Analista de datos" handleChange={props.handleDegreeChange} />
            <label for="timeField">Desde - Hasta: </label>
                <InputField id="timeField" className="input-field" placeholder="2008 - 2011" handleChange={props.handleTimeChange} /> 
        </div>
        
    )
}