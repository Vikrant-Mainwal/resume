import React from 'react'

const ExperienceSection = ({experience}) => {
  return (
    <div>
        {experience && experience.length >0?(
             experience.map((exp, index) => (
                <div className="flex items-center justify-between" key={index}>
                  <div>
                    <p className="font-semibold">•{exp.institution}</p>
                    <p className="mx-[4px]">{exp.course} in {exp.degree}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p>{exp.graduationDate}</p>
                    <p>{exp.cpi}</p>
                  </div>
                </div>
              ))
        ):(
           ""
          )}
    </div>
  )
}

export default ExperienceSection