import React, { useState } from "react";
import { InputField } from "./InputField";

export function Experience(props){
    return (
        <div className="experience-field">
            <label for="positionField">Cargo: </label>
                <InputField id="positionField" className="input-field" placeholder="CEO" handleChange={props.handlePositionChange} />
            <label for="companyField">Empresa: </label>
                <InputField id="companyField" className="input-field" placeholder="RIZAP" handleChange={props.handleCompanyChange} />
            <label for="cityField">Locación: </label>
                <InputField id="cityField" className="input-field" placeholder="Kamurocho, Japon" handleChange={props.handleLocationChange} />
            <label for="timeField">Desde - Hasta: </label>
                <InputField id="timeField" className="input-field" placeholder="2012 - 2020" handleChange={props.handleTimeChange} /> 
        </div>
    )
}