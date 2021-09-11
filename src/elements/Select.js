import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import utils from '../utils/string'

const Select = (props) => {
  const { name, options } = props
  const [data, setData] = useState('')

  // looking to update every time props.value changes
  useEffect(() => {
    if (props.value) {
      setData(props.value)
    }
  }, [props.value])

  // handle when an option is selected
  const handleSelectChange = (e) => {
    const newData = e.target.value
    setData(newData)
    props.onDataChange(name, newData)
  }

  return (
    <div className="w-full">
      {/* label */}
      <label
        id={`${name}-label`}
        className="w-full mb-1 text-sm text-gray-800"
        htmlFor={`${name}-select`}
      >
        {utils.capitalize(name)}
      </label>

      {/* select */}
      <select
        id={`${name}-select`}
        name={name}
        className="w-full rounded-lg p-2 shadow-md
          border-2 border-opacity-75 text-gray-700
          focus:border-gray-400 focus:ring-gray-400"
        aria-label={name}
        aria-describedby={`${name}-label`}
        onChange={handleSelectChange}
        value={data}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {utils.capitalize(option)}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onDataChange: PropTypes.func.isRequired,
}
export default Select