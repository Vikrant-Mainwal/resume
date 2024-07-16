import React from "react";

const TextArea = ({
  placeholder,
  autoComplete,
  type,
  required,
  value,
  onChange,
  className,
  fieldName = "",
  defaultValue,
  disabled,
  name,
  ...rest
}) => {
  return (
    <div className="flex gap-[10px]">
      {fieldName && <div className="text-[16px] ">{fieldName}:</div>}
      <textarea
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${className} text-[rgba(0,0,0,0.8)] text-[14px] font-400 rounded-md outline-none p-[5px] border-gray-900 border-[1px] `}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
