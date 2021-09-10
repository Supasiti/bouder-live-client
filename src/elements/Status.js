import { PropTypes } from 'prop-types'

const colours = {
  running: 'bg-green-500',
  open: 'bg-yellow-400',
  pending: 'bg-yellow-400',
  cancelled: 'bg-red-400',
  ended: 'bg-red-400',
}
const Status = (props) => {
  const { status } = props

  return (
    <div
      className={`${colours[status]} w-8 h-8 rounded-full shadow-lg drop-shadow-xl`}
    ></div>
  )
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
}
export default Status
