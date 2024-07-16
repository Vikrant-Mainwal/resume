import React from 'react'
import InterestSection from './InterestSection'

const Interest = ({resumeInfo}) => {
  return (
    <div>
        {resumeInfo?.interests && resumeInfo.interests.length > 0 ? (
    <div className="">
      <div className='font-bold text-[20px]'>Area Of Interest</div>
      <div className='h-[2px] bg-black '/>
      <InterestSection interests= {resumeInfo.interests}/>
      </div>):( 
        null
      )}
      </div>
  )
}

export default Interest