import React from 'react'
import ProjectsSection from './ProjectsSection'
import Heading from '../../../../Global/Heading'

const Projects = ({resumeInfo}) => {
    // console.log(resumeInfo?.projects)
  return (
    <div className="">
     { resumeInfo?.projects && resumeInfo?.projects.length>0 ?(
      <div>
      <Heading heading={"Projects"}/>
      <div className="">
        <ProjectsSection projects = {resumeInfo?.projects}/>
      </div>
      </div>
       ):
      ""}
      </div>
  )
}

export default Projects