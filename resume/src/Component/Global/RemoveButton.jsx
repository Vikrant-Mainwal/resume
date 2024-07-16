import React from 'react'

const RemoveButton = ({className,rest,children,onClick}) => {
  return (
    <button
    type='submit'
    className={`${className} p-[10px_15px] bg-red-400 items-center rounded-md cursor-pointer text-white`}
    onClick={onClick}
    {...rest}
    >
{children}
    </button>
  )
}

export default RemoveButton