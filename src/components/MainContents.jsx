import { useState } from 'react'
import { PersonalInfo } from './PersonalInfo'
import { Experience } from './Experience'
import { Education } from './Education'

function MainContents() {
    const [name, setName] = useState('Gary Smith')
    const [cellphone, setCellphone] = useState('+58 412-1234567')
    const [email, setEmail] = useState('gary_smith@gmail.com')
    const [address, setAddress] = useState('1063 Red Bud Lane, Tampa, Florida')
    const [age, setAge] = useState('26')
    const [desc, setDesc] = useState('...')

    const [position, setPosition] = useState('CEO')
    const [company, setCompany] = useState('RIZAP')
    const [location, setLocation] = useState('Kamurocho, Japon')
    const [timeExp, setTimeExp] = useState('2012 - 2020')

    const [institution, setInstitution] = useState('Harvard')
    const [city, setCity] = useState('Cambridge')
    const [degree, setDegree] = useState('Analista de datos')
    const [timeEdu, setTimeEdu] = useState('2008 - 2011')

    const [personalFields, setPersonalFields] = useState([
    <PersonalInfo 
        name={name} 
        setName={setName}
        handleNameChange={(e) => { setName(e.target.value) }}
        cellphone={cellphone} 
        setCellphone={setCellphone}
        handlePhoneChange={(e) => { setCellphone(e.target.value) }}
        email={email} 
        setEmail={setEmail}
        handleEmailChange={(e) => { setEmail(e.target.value) }}
        address={address} 
        setAddress={setAddress}
        handleAddressChange={(e) => { setAddress(e.target.value) }}
        age={age} 
        setAge={setAge}
        handleAgeChange={(e) => { setAge(e.target.value) }}
        desc={desc} 
        setDesc={setDesc}
        handleDescChange={(e) => { setDesc(e.target.value) }}
    />])

    const [experienceFields, setExperienceFields] = useState([
    <Experience 
        position={position} 
        setPosition={setPosition}
        handlePositionChange={(e) => { setPosition(e.target.value) }}
        company={company}
        setCompany={setCompany}
        handleCompanyChange={(e) => { setCompany(e.target.value) }}
        location={location}
        setLocation={setLocation}
        handleLocationChange={(e) => { setLocation(e.target.value) }}
        timeExp={timeExp}
        setTimeExp={setTimeExp}
        handleTimeChange={(e) => { setTimeExp(e.target.value) }}
    />]);

    const [educationFields, setEducationFields] = useState([
    <Education 
        institution={institution} 
        setInstitution={setInstitution}
        handleInstitutionChange={(e) => { setInstitution(e.target.value) }}
        city={city}
        setCity={setCity}
        handleCityChange={(e) => { setCity(e.target.value) }}
        degree={degree}
        setDegree={setDegree}
        handleDegreeChange={(e) => { setDegree(e.target.value) }}
        timeEdu={timeEdu}
        setTimeEdu={setTimeEdu}
        handleTimeChange={(e) => { setTimeEdu(e.target.value) }}
        />])

    // function handleAddExperience(){
    //   setExperienceFields([...experienceFields, <Experience />]);
    // }

    // function handleAddEducation(){
    // setEducationFields([...educationFields, <Education />]);
    // }

  return (
    <>
      <h2>Informacion personal:</h2>
      {personalFields}
      <h3>Experiencia:</h3>
      {experienceFields}
            {/* <button onClick={handleAddExperience}>Añadir</button> */}
      <h3>Educación:</h3>
      {educationFields}
            {/* <button onClick={handleAddEducation}>Añadir</button> */}

      <h3>{name}</h3>
      <h3>{cellphone}</h3>
      <h3>{email}</h3>
      <h3>{address}</h3>
      <h3>{age} años</h3>
      <h3>{desc}</h3>
        
      <i>{position} - </i>
      <i>{company} - </i>
      <i>{location} - </i>
      <i>{timeExp}</i>
      

      <p>{institution}</p>
      <p>{city}</p>
      <p>{degree}</p>
      <p>{timeEdu}</p>
    </>
  )
}

export default MainContents