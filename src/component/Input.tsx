import React, { FC } from 'react'
import { BiAlarmAdd    } from "react-icons/bi";

interface InputProps {
    id?: string;
    placeholder?: string;
    name?: string;
    type?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ id, placeholder, name, type, value, onChange }) => {
  return (
    <div className='w-full h-12 bg-gray-800 flex justify-center items-center'>
      <input 
       id={id}
       type={type}
       name={name}
       value={value}
       placeholder={placeholder}
       onChange={onChange} 
      className="input input-bordered input-info w-full" />
      <button className="btn btn-outline btn-success"><BiAlarmAdd/></button>
    </div>
  )
}

export default Input