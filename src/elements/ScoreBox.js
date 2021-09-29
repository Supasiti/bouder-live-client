import { PropTypes } from 'prop-types'

// styling
const container = `
  flex flex-col justify-center items-center space-y-0.5`

const bgColor = (props) => {
  const { value } = props.entry
  if (typeof value === 'boolean' && value) {
    return 'bg-gray-400'
  }
  return ''
}

const boxStyle = (props) => {
  const size = 'size' in props ? props.size : 8
  const extend = 'extend' in props ? props.extend : ''

  return `
    w-${size} h-${size} border-gray-400 
    border-2 border-opacity-75 rounded-md text-sm 
    flex items-center justify-center ${bgColor(props)} ${extend}`
}

const titleStyle = (props) => {
  const size = 'size' in props ? props.size : 8
  return `w-${size} md:w-8 text-center`
}

const boxChild = (value) => {
  if (typeof value === 'boolean') {
    if (value) {
      return (
        <span
          className="flex-grow text-center text-gray-100 
          fas fa-check text-lg"
        ></span>
      )
    }
    return <></>
  }
  return <p className="text-center sm:text-lg">{value}</p>
}

// rendering
const ScoreBox = (props) => {
  const { entry } = props

  return (
    <div className={container}>
      <div className={titleStyle(props)}>{entry.abbrev}</div>
      <div className={boxStyle(props)}>{boxChild(entry.value)}</div>
    </div>
  )
}

ScoreBox.propTypes = {
  entry: PropTypes.object.isRequired,
}
export default ScoreBox
