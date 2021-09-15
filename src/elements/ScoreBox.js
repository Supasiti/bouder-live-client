import { PropTypes } from 'prop-types'

const ScoreBox = (props) => {
  const color = 'color' in props ? props.color : ''

  return (
    <div
      className={`w-8 h-8 border-gray-400 border-2 border-opacity-75
    rounded-md text-sm flex items-center justify-center ${color}`}
    >
      {props.children}
    </div>
  )
}

ScoreBox.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
}
export default ScoreBox
