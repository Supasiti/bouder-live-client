/* eslint-disable react/prop-types */
import { useState } from 'react'
import utils from '../utils'

const TextInput = (props) => {
  const { type } = 'type' in props && props
  const { name } = 'name' in props && props
  const { placeholder } = 'placeholder' in props && props

  const [data, setData] = useState('')

  const handleOnChange = (e) => {
    const newValue = e.target.value
    setData(newValue)
    props.onDataChange(newValue)
  }

  return (
    <div className="w-full">
      <label
        className="w-full mb-1 text-sm text-gray-800"
        id={`${name}-label`}
        htmlFor={`${name}-input`}
      >
        {utils.capitalize(name)}
      </label>
      <input
        type={type}
        id={`${name}-input`}
        name={name}
        className="w-full rounded-lg p-2 shadow-md
          border-gray-400 border-2 border-opacity-75
          text-gray-700
          focus:border-gray-400 focus:ring-gray-400"
        placeholder={placeholder}
        aria-label={name}
        aria-describedby={`${name}-label`}
        value={data}
        onChange={handleOnChange}
      />
    </div>
  )
}
export default TextInput
