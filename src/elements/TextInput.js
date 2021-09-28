import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import utils from '../utils/string'

const labelAttr = (idName) => {
  const result = {
    className: 'w-full mb-1 text-sm text-gray-800',
    id: `${idName}-label`,
    htmlFor: `${idName}-input`,
  }
  return result
}

const inputClassList = (isError) => {
  const borderColor = isError ? 'border-red-400' : 'border-gray-400'
  const result = `w-full rounded-lg p-2 shadow-md
    ${borderColor}
    border-2 border-opacity-75 text-gray-700
    focus:border-gray-400 focus:ring-gray-400`
  return result
}

// render text input
const TextInput = (props) => {
  const { type, name, placeholder, label, idName } = props
  const { data, setData } = usePropState(props, 'value', '')
  const { data: isError, setData: setError } = usePropState(
    props,
    'isError',
    false,
  )

  // handle when input changes
  const handleOnChange = (e) => {
    const newValue = e.target.value
    setData(newValue)
    setError(false)
    props.onDataChange(name, newValue)
  }

  const inputAttr = {
    type,
    id: `${idName}-input`,
    name,
    className: inputClassList(isError),
    placeholder,
    value: data,
    onChange: handleOnChange,
  }

  return (
    <div className="w-full">
      <label {...labelAttr(idName)}>{utils.capitalize(label)}</label>
      <input
        {...inputAttr}
        aria-label={idName}
        aria-describedby={`${idName}-label`}
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
