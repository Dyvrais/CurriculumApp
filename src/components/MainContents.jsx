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

// const [experienceFields, setExperienceFields] = useState([<Experience />]);
// const [educationFields, setEducationFields] = useState([<Education />])

// function handleAddExperience(){
//   setExperienceFields([...experienceFields, <Experience />]);
// }

// function handleAddEducation(){
//   setEducationFields([...educationFields, <Education />]);
// }

  return (
    <>
      <h2>Informacion personal:</h2>
      <PersonalInfo />
      <h3>Experiencia:</h3>
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
      />
      {/* {experienceFields}
      <button onClick={handleAddExperience}>Añadir</button>
      <h3>Educación:</h3>
      {educationFields}
      <button onClick={handleAddEducation}>Añadir</button> */}
      <p>{institution}</p>
      <p>{city}</p>
      <p>{degree}</p>
      <p>{timeEdu}</p>
    </>
  )
}

export default MainContents