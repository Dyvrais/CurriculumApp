import React, { useState } from "react";
import { InputField } from "./InputField";

export function Experience(props){
    return (
        <div className="experience-field grid grid-cols-2 gap-2 w-fit">
            <label for="positionField">Cargo: </label>
                <InputField id="positionField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="CEO" handleChange={props.handlePositionChange} />
            <label for="companyField">Empresa: </label>
                <InputField id="companyField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="RIZAP" handleChange={props.handleCompanyChange} />
            <label for="cityField">Locación: </label>
                <InputField id="cityField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="Kamurocho, Japon" handleChange={props.handleLocationChange} />
            <label for="timeField">Desde - Hasta: </label>
                <InputField id="timeField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="2012 - 2020" handleChange={props.handleTimeChange} /> 
        </div>
    )
}