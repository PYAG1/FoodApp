

import { TextFieldTypes } from './types';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function TextField({
  values,
  id,
  touched,
  errors,
  handleBlur,
  handleChange,
  label,
  type,
  placeholder,
}: TextFieldTypes) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-sm font-manrope text-gray-500">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          className={`
        
            bg-[#4c4c4c]
            w-full 
            px-4 
            py-2 
            rounded-md 
            focus:outline-none 
         text-white
            focus:ring-background 
            focus:border-background 
            ${errors[id] && touched[id] ? 'border-red-400' : 'border-gray-300'}
          `}
          type={type}
          id={id}
          name={id}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[id]}
          placeholder={placeholder}
        />
        {errors[id] && touched[id] && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
          </div>
        )}
      </div>
      {errors[id] && touched[id] && (
        <p className="text-xs text-red-400" id={`${id}-error`}>
          {errors[id]}
        </p>
      )}
    </div>
  );
}
