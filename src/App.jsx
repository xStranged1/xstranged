import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import SectionMe from './components/sectionMe'
import SectionMyProjects from './components/sectionMyProjects'
import SectionAppLimpieza from './components/sectionAppLimpieza'
import SectionConsultorio from './components/consultorio'
function App() {

  return (
    <div>
      <Header />

      <SectionMe />
      
      <SectionMyProjects />
      <div style={{marginTop: 200}}/>
      <SectionAppLimpieza />

      <SectionConsultorio />

    </div>
  )
}

export default App
