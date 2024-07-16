import React from 'react'
import Profile from './forms/Profile'
import Education from './forms/Education'
import { Route, Routes } from 'react-router-dom'
import Experience from './forms/Experience'
import Projects from './forms/Projects'
import Skills from './forms/Skills'
import Interest from './forms/Interest'

const FormSection = () => {
  return (
      <div className='w-full'>
    <Routes className="">   
       <Route path={'/profile'} element={<Profile/>}/> 
       <Route path='/education' element={<Education/>}/> 
       <Route path='/experience' element={<Experience/>}/> 
       <Route path='/projects' element={<Projects/>}/> 
       <Route path='/skills' element={<Skills/>}/> 
       <Route path='/interest' element={<Interest/>}/> 
    </Routes>
        </div>
  )
}

export default FormSection