import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const TextField = ({label,value,onChange,placeholder,isPassword}) => {

  const [isShowPassword,setIsShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative w-full">
      
      {/* Styled Label */}
      {label && (
        <label className="block text-gray-700 font-medium text-sm">
          {label} 
        </label>
      )}

      <input
        value={value}
        onChange={onChange}
        type={isPassword ? (isShowPassword ? "text" : "password") : "text"}
        placeholder={placeholder || "Password"}
        className="w-full px-4 py-4 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {
        isPassword && 
        <button
            type="button"
            onClick={toggleShowPassword}
            aria-label={isShowPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 mt-5 mr-2"
        >
        {isShowPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
        </button>
      }
    </div>
  )
}

export default TextField