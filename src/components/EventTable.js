import { PropTypes } from 'prop-types'
import EventCard from '../elements/EventCard'

const EventTable = (props) => {
  const { title, events, link } = props
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      <div
        className="md:flex md:justify-around 
          md:flex-wrap"
      >
        {events.map((e) => (
          <div className="p-2" key={e.id}>
            <EventCard
              name={e.name}
              location={e.location}
              status={e.status}
              eventId={e.id}
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
EventTable.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
}

export default EventTable
