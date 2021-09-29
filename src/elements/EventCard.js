import { PropTypes } from 'prop-types'
import Card from './Card'
import Status from './Status'
import AbsoluteDiv from './AbsoluteDiv'

const fontStyle = `text-yellow-600 text-lg font-bold`
const container = `max-w-md mx-auto md:w-80 lg:w-64 lg:h-84 
  hover:-translate-y-1 transition transform`

const cardStyle = {
  color: 'greyLight',
  extraClasses: 'relative',
}

const imgContainer = `w-32 h-32 bg-gray-600 rounded-l-2xl
  lg:w-56 lg:h-56 lg:rounded-lg lg:mx-auto lg:mt-4`

// render event card
const EventCard = (props) => {
  const { name, location, status, eventId, link } = props

  return (
    <div className={container}>
      <Card {...cardStyle}>
        <a href={`${link}${eventId}`}>
          <div className="flex lg:flex-col">
            {/* image */}
            <div className={imgContainer}></div>

            {/* captions */}
            <div className="p-4">
              <h4 className={fontStyle}>{name}</h4>
              <p>{location}</p>
            </div>
          </div>

          {/* status */}
          <AbsoluteDiv pos="-top-2.5 -right-2.5">
            <Status status={status} />
          </AbsoluteDiv>
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
