import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'

const AssignmentCheckbox = (props) => {
  const { problemId, categoryId } = props
  const { data: checked, setData: setChecked } = usePropState(
    props,
    'checked',
    false,
  )

  const handleChanged = (e) => {
    const newChecked = e.target.value
    setChecked(newChecked)
    props.onChange(newChecked, problemId, categoryId)
  }

  return (
    <input
      type="checkbox"
      className="w-8 h-8 border-gray-400 border-2 border-opacity-75
    text-yellow-500 rounded-md
    focus:ring-yellow-500 focus:border-yellow-500
    focus:text-yellow-500 focus-visible:text-yellow-500"
      checked={checked}
      onChange={handleChanged}
    />
  )
}
AssignmentCheckbox.propTypes = {
  problemId: PropTypes.number.isRequired,
  categoryId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default AssignmentCheckbox
