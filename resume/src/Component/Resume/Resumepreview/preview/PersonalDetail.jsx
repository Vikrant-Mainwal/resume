import React from 'react'
import { assets } from '../../../../assets/assets'

const PersonalDetail = ({resumeInfo}) => {

  
  return (
    <div className='flex !w-full '>
        <div className='w-[150px] flex justify-center items-center scale-[0.9]'>
        <img src={assets.Logo} alt="" className='w-[120px]'  />
        </div>
        <div className="flex flex-col scale-[0.9]">
            <p className='font-bold'>{resumeInfo?.name}</p>
            <p>Roll No. {resumeInfo?.enrollment}</p>
            <p>{resumeInfo?.course}</p>
            <p>{resumeInfo?.branch}</p>
            <p>Motilal Nehru National Institute of Technology Allahabad, Prayagraj</p>
        
        
        </div>
        <div className="flex flex-col items-end justify-end scale-[0.9]">
            <p>{resumeInfo?.phone} </p>
            <p>{resumeInfo?.email} </p>
            <p>{resumeInfo?.collegeemail} </p>
           {resumeInfo?.linkedin ? <a href={resumeInfo?.linkedin} target='_blank' >{resumeInfo?.name} </a>: "Linkedin link not found"}
            <p>{resumeInfo?.github} </p>
        </div>
    </div>
  )
}

export default PersonalDetail