import { PropTypes } from 'prop-types'
// import { useHistory } from 'react-router-dom'
import Card from './Card'
import Status from './Status'

const EventCard = (props) => {
  const { name, location, status, eventId } = props

  return (
    <div
      className="max-w-md mx-auto md:w-80 md:h-96 
        hover:-translate-y-1 transition transform"
    >
      <Card color="greyLight" extraClasses="relative">
        <a href={`/o/events/${eventId}`}>
          <div className="flex md:flex-col">
            {/* image */}
            <div
              className="w-32 h-32 bg-gray-600 rounded-l-2xl
              md:w-72 md:h-72 md:rounded-lg md:mx-auto md:mt-4"
            ></div>

            {/* captions */}
            <div className="p-4">
              <h4 className="text-yellow-600 text-lg font-bold">{name}</h4>
              <p>{location}</p>
            </div>
          </div>

          {/* status */}
          <div className="absolute -top-2.5 -right-2.5">
            <Status status={status} />
          </div>
        </a>
      </Card>
    </div>
  )
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
}
export default EventCard
