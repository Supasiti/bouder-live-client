import { PropTypes } from 'prop-types'

const inputClassList = `w-4 h-4
  border-gray-400 border-2 border-opacity-75
  text-yellow-500
  focus:ring-yellow-500 focus:border-yellow-500
  focus:text-yellow-500 focus-visible:text-yellow-500`

const container = `flex items-center align-middle justify-center`

// render element
const Radio = (props) => {
  const { name, value, isChecked } = props

  const handleClicked = (e) => {
    props.onClick(name, e.target.value)
  }

  const inputAttr = {
    type: 'radio',
    name,
    value,
    id: `radio-${value}`,
    className: inputClassList,
    onClick: handleClicked,
    defaultChecked: JSON.parse(isChecked) || false,
  }

  return (
    <div className={container}>
      <input {...inputAttr} />
      <label htmlFor={`radio-${value}`} className="px-2 text-gray-400">
        {value}
      </label>
    </div>
  )
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
}
export default Radio
