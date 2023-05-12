import { useState } from 'react'
import { MainInfo } from './components/MainInfo'
import { Experience } from './components/Experience'
import { Education } from './components/Education'

function App() {
const [experienceFields, setExperienceFields] = useState([<Experience />]);
const [educationFields, setEducationFields] = useState([<Education />])

function handleAddExperience(){
  setExperienceFields([...experienceFields, <Experience />]);
}

function handleAddEducation(){
  setEducationFields([...educationFields, <Education />]);
}

  return (
    <>
      <h2>Informacion personal:</h2>
      <MainInfo />
      <h3>Experiencia:</h3>
      {experienceFields}
      <button onClick={handleAddExperience}>Añadir</button>
      <h3>Educación:</h3>
      {educationFields}
      <button onClick={handleAddEducation}>Añadir</button>
    </>
  )
}

export default App
