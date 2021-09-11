import { PropTypes } from 'prop-types'
import { useState, useEffect } from 'react'
import utils from '../utils/string'

const TextInput = (props) => {
  const { type, name, placeholder, isError } = props
  const [data, setData] = useState('')
  const borderColor = isError ? 'border-red-400' : 'border-gray-400'

  // looking to update every time props.value changes
  useEffect(() => {
    if (props.value) {
      setData(props.value)
    }
  }, [props.value])

  // handle when input changes
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
        className={`w-full rounded-lg p-2 shadow-md
          ${borderColor}
          border-2 border-opacity-75 text-gray-700
          focus:border-gray-400 focus:ring-gray-400`}
        placeholder={placeholder}
        aria-label={name}
        aria-describedby={`${name}-label`}
        value={data}
        onChange={handleOnChange}
      />
    </div>
  )
}
TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onDataChange: PropTypes.func.isRequired,
}
export default TextInput
