import React from 'react'

const AddButton = ({className,rest,children,onClick}) => {
  return (
    <button
    className={`${className} p-[10px_20px] bg-green-600 items-center rounded-md cursor-pointer text-white`}
    onClick={onClick}
    {...rest}
    >
{children}
    </button>
  )
}

export default AddButton