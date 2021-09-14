import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import utils from '../utils/string'

const TextInput = (props) => {
  const { type, name, placeholder, label, idName } = props
  const isError = 'isError' in props ? props.isError : false
  const { data, setData } = usePropState(props, 'value', '')
  const borderColor = isError ? 'border-red-400' : 'border-gray-400'

  // handle when input changes
  const handleOnChange = (e) => {
    const newValue = e.target.value
    setData(newValue)
    props.onDataChange(name, newValue)
  }

  return (
    <div className="w-full">
      <label
        className="w-full mb-1 text-sm text-gray-800"
        id={`${idName}-label`}
        htmlFor={`${idName}-input`}
      >
        {utils.capitalize(label)}
      </label>
      <input
        type={type}
        id={`${idName}-input`}
        name={name}
        className={`w-full rounded-lg p-2 shadow-md
          ${borderColor}
          border-2 border-opacity-75 text-gray-700
          focus:border-gray-400 focus:ring-gray-400`}
        placeholder={placeholder}
        aria-label={idName}
        aria-describedby={`${idName}-label`}
        value={data}
        onChange={handleOnChange}
      />
    </div>
  )
}
TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  onDataChange: PropTypes.func.isRequired,
}
export default TextInput
