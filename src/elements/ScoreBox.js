import { PropTypes } from 'prop-types'

const ScoreBox = (props) => {
  const color = 'color' in props ? props.color : ''
  const size = 'size' in props ? props.size : 8
  const extend = 'extend' in props ? props.extend : ''

  return (
    <div
      className={`w-${size} h-${size} border-gray-400 
        border-2 border-opacity-75 rounded-md text-sm 
        flex items-center justify-center ${color} ${extend}`}
    >
      {props.children}
    </div>
  )
}

ScoreBox.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.number,
  extend: PropTypes.string,
}
export default ScoreBox
