import { PropTypes } from 'prop-types'

const EventTable = (props) => {
  const { title, events } = props

  console.log(events)
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      <p>Table</p>
    </div>
  )
}
EventTable.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
}

export default EventTable
