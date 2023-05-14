import React, { useState } from "react";
import { InputField } from "./InputField";


export function PersonalInfo(props){
    return(
        <div className="personal-field grid grid-cols-2 gap-2 w-fit">
            <label for="nameField">Nombre completo: </label>
                <InputField id="nameField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="Gary Smith" handleChange={props.handleNameChange} />
            <label for="phoneField">Telefono: </label>
                <InputField id="phoneField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="+58 412-1234567" handleChange={props.handlePhoneChange} />
            <label for="emailField">Correo: </label>
                <InputField id="emailField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="gary_smith@gmail.com" handleChange={props.handleEmailChange} />
            <label for="addressField">Direccion: </label>
                <InputField id="addressField" className="border-2 border-gray-500 p-0.5 rounded-md" placeholder="1063 Red Bud Lane, Tampa, Florida" handleChange={props.handleAddressChange} />
            <label for="ageField">Edad: </label>
                <InputField id="ageField" type="number" className="border-2 border-gray-500 p-0.5 rounded-md w-16" placeholder="26" maxlength="2" min="14" max="99" handleChange={props.handleAgeChange} />
            <label for="descField">Descripcion: </label>
                <InputField id="descField" type="text" className="border-2 border-gray-500 p-0.5 rounded-md desc" placeholder="..." handleChange={props.handleDescChange} />                
        </div>
    )
}