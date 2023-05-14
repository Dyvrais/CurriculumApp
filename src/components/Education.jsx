import React, { useState } from "react";
import { InputField } from "./InputField";

export function Education(props){
    return (
        <div className="education-field grid grid-cols-2 gap-2 w-fit">
            <label for="institutionField">Institución: </label>
                <InputField id="institutionField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="Harvard" handleChange={props.handleInstitutionChange} />
            <label for="cityField">Ciudad: </label>
                <InputField id="cityField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="Cambridge" handleChange={props.handleCityChange} />
            <label for="degreeField">Titulo: </label>
                <InputField id="degreeField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="Analista de datos" handleChange={props.handleDegreeChange} />
            <label for="timeField">Desde - Hasta: </label>
                <InputField id="timeField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="2008 - 2011" handleChange={props.handleTimeChange} /> 
        </div>
        
    )
}