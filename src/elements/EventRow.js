import { PropTypes } from 'prop-types'

const EventRow = (props) => {
  const { event } = props
  const onClick = 'onClick' in props ? props.onClick : () => {}

  // handle being selected
  const handleClick = (e) => {
    e.preventDefault()
    onClick(event.id)
  }

  return (
    <div
      className="w-full space-y-2 p-2"
      onClick={handleClick}
      onKeyUp={handleClick}
      role="button"
      tabIndex="0"
    >
      <p className="font-bold text-lg">{event.name}</p>
      <p className="italic">{event.location}</p>
    </div>
  )
}

EventRow.propTypes = {
  event: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}
export default EventRow
