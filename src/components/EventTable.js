import { PropTypes } from 'prop-types'
import EventCard from '../elements/EventCard'

const EventTable = (props) => {
  const { title, events } = props
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      {events.map((e) => (
        <EventCard
          name={e.name}
          location={e.location}
          status={e.status}
          key={e.id}
        />
      ))}
    </div>
  )
}
EventTable.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
}

export default EventTable
