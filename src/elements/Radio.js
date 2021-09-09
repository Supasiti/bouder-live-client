/* eslint-disable react/prop-types */
const Radio = (props) => {
  const { name } = 'name' in props && props
  const { value } = 'value' in props && props

  const handleClicked = (e) => props.onClick(e.target.value)

  return (
    <div className="flex items-center align-middle justify-center">
      <input
        type="radio"
        name={name}
        value={value}
        id={`radio-${value}`}
        className="w-4 h-4
        border-gray-400 border-2 border-opacity-75
        text-yellow-500
        focus:ring-yellow-500 focus:border-yellow-500
        focus:text-yellow-500 focus-visible:text-yellow-500"
        onClick={handleClicked}
      />
      <label htmlFor={`radio-${value}`} className="px-2 text-gray-400">
        {value}
      </label>
    </div>
  )
}

export default Radio
