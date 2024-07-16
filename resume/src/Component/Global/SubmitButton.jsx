import React, { Children } from 'react'

const SubmitButton = ({children,className,rest,onClick}) => {
  return (
    <button
    type='submit'
    onClick={onClick}
    className={`${className} p-[10px_20px] bg-slate-600 items-center rounded-md cursor-pointer text-white`}
    {...rest}
    >
{children}
    </button>
  )
}

export default SubmitButton