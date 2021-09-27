import { PropTypes } from 'prop-types'
import Card from './Card'
import Status from './Status'

const EventCard = (props) => {
  const { name, location, status, eventId, link } = props

  return (
    <div
      className="max-w-md mx-auto md:w-80 lg:w-64 lg:h-84 
        hover:-translate-y-1 transition transform"
    >
      <Card color="greyLight" extraClasses="relative">
        <a href={`${link}${eventId}`}>
          <div className="flex lg:flex-col">
            {/* image */}
            <div
              className="w-32 h-32 bg-gray-600 rounded-l-2xl
              lg:w-56 lg:h-56 lg:rounded-lg lg:mx-auto lg:mt-4"
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
  eventId: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
export default EventCard
