import React from 'react'

const InterestSection = ({interests}) => {
  return (
    <div>
        {interests.map((int,index)=>(
            <div key={index}>
                 {int}
            </div>
        ))}
    </div>
  )
}

export default InterestSection