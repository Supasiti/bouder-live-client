import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import utils from '../utils/string'

const labelAttr = (name) => ({
  id: `${name}-label`,
  className: 'w-full mb-1 text-sm text-gray-800',
  htmlFor: `${name}-select`,
})

const selectClass = `w-full rounded-lg p-2 shadow-md
  border-2 border-opacity-75 text-gray-700
  focus:border-gray-400 focus:ring-gray-400`

// render select
const Select = (props) => {
  const { name, options, label } = props
  const { data, setData } = usePropState(props, 'value', '')

  // handle when an option is selected
  const handleSelectChange = (e) => {
    const newData = e.target.value
    setData(newData)
    props.onDataChange(name, newData)
  }

  return (
    <div className="w-full">
      {/* label */}
      <label {...labelAttr(name)}>{utils.capitalize(label)}</label>

      {/* select */}
      <select
        id={`${name}-select`}
        name={name}
        className={selectClass}
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
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onDataChange: PropTypes.func.isRequired,
}
export default Select
