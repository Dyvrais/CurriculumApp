import { useState } from 'react'
import { MainInfo } from './components/MainInfo'
import { Experience } from './components/Experience'
import { Education } from './components/Education'

function App() {
  const [institution, setInstitution] = useState('Harvard')
  const [city, setCity] = useState('Cambridge')
  const [degree, setDegree] = useState('Analista de datos')
  const [time, setTime] = useState('2008 - 2011')

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
      <MainInfo />
      <h3>Experiencia:</h3>
      <Education 
        institution={institution} 
        setInstitution={setInstitution}
        handleInstitutionChange={(e) => { setInstitution(e.target.value) }}
        city={city}
        setCity={setCity}
        handleCityChange={(e) => { setCity(e.target.value) }}
      />
      {/* {experienceFields}
      <button onClick={handleAddExperience}>Añadir</button>
      <h3>Educación:</h3>
      {educationFields}
      <button onClick={handleAddEducation}>Añadir</button> */}
      <p>{institution}</p>
      <p>{city}</p>
    </>
  )
}

export default App
