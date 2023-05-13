import React, { useState } from "react";
import { InputField } from "./InputField";


export function PersonalInfo(props){
    return(
        <div className="personal-field">
            <label for="nameField">Nombre completo: </label>
                <InputField id="nameField" className="input-field" placeholder="Gary Smith" handleChange={props.handleNameChange} />
            <label for="phoneField">Telefono: </label>
                <InputField id="phoneField" className="input-field" placeholder="+58 412-1234567" handleChange={props.handlePhoneChange} />
            <label for="emailField">Correo: </label>
                <InputField id="emailField" className="input-field" placeholder="gary_smith@gmail.com" handleChange={props.handleEmailChange} />
            <label for="addressField">Direccion: </label>
                <InputField id="addressField" className="input-field" placeholder="1063 Red Bud Lane, Tampa, Florida" handleChange={props.handleAddressChange} />
            <label for="ageField">Edad: </label>
                <InputField id="ageField" type="number" className="input-field" placeholder="26" handleChange={props.handleAgeChange} />
            <label for="descField">Descripcion: </label>
                <InputField id="descField" type="text" className="input-field desc" placeholder="..." handleChange={props.handleDescChange} />                
        </div>
    )
}