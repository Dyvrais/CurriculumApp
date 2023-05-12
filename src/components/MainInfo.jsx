import React, { useState } from "react";
import { InputField } from "./InputField";


export function MainInfo(){
    const [name, setName] = useState('Gary Smith')
    const [cellphone, setCellphone] = useState('+58 412-1234567')
    const [email, setEmail] = useState('gary_smith@gmail.com')
    const [address, setAddress] = useState('1063 Red Bud Lane, Tampa, Florida')
    const [age, setAge] = useState('26')
    const [desc, setDesc] = useState('...')

    const handleNameChange = (e) => { setName(e.target.value) }
    const handlePhoneChange = (e) => { setCellphone(e.target.value) }
    const handleEmailChange = (e) => { setEmail(e.target.value) }
    const handleAddressChange = (e) => { setAddress(e.target.value) }
    const handleAgeChange = (e) => { setAge(e.target.value) }
    const handleDescChange = (e) => { setDesc(e.target.value) }

    return(
        <>
            <label for="nameField">Nombre completo: </label>
                <InputField id="nameField" className="input-field" placeholder="Gary Smith" handleChange={handleNameChange} />
            <label for="phoneField">Telefono: </label>
                <InputField id="phoneField" className="input-field" placeholder="+58 412-1234567" handleChange={handlePhoneChange} />
            <label for="emailField">Correo: </label>
                <InputField id="emailField" className="input-field" placeholder="gary_smith@gmail.com" handleChange={handleEmailChange} />
            <label for="addressField">Direccion: </label>
                <InputField id="addressField" className="input-field" placeholder="1063 Red Bud Lane, Tampa, Florida" handleChange={handleAddressChange} />
            <label for="ageField">Edad: </label>
                <InputField id="ageField" type="number" className="input-field" placeholder="26" handleChange={handleAgeChange} />
            <label for="descField">Descripcion: </label>
                <InputField id="descField" type="text" className="input-field desc" placeholder="..." handleChange={handleDescChange} />                
                
            <h1>{name}</h1>
            <strong>{cellphone}</strong>
            <p>{email}</p>
            <p>{address}</p>
            <p>{age} años</p>
            <p>{desc}</p>
        </>
    )
}