import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import SectionMe from './components/sectionMe'
import SectionMyProjects from './components/sectionMyProjects'
import SectionAppLimpieza from './components/sectionAppLimpieza'
import SectionConsultorio from './components/consultorio'
import Footer from './components/footer';
function App() {

  return (
    <div>
      <head>
      </head>
      <Header />

      <SectionMe />
      
      <SectionMyProjects />
      <SectionAppLimpieza />
      <div class="b-example-divider"></div>
      <SectionConsultorio />
      <Footer />


    </div>
  )
}

export default App
