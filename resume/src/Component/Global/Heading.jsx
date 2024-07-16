import React from 'react'

const Heading = ({heading}) => {
  return (
    <div >
            <div className='font-bold text-[20px]'>
            {heading}
            </div>
            <div className='h-[1px] bg-black outline-none mt-[8px]'/>
    </div>
  )
}

export default Heading