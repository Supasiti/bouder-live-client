import { PropTypes } from 'prop-types'
import Card from './Card'
import Status from './Status'

const EventCard = (props) => {
  const { name, location, status } = props

  return (
    <Card color="greyLight" extraClasses="relative">
      <div className="flex">
        <div className="w-32 h-32 bg-gray-600 rounded-l-2xl"></div>
        <div className="p-4">
          <h4 className="text-yellow-600 text-lg font-bold">{name}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="absolute -top-2.5 -right-2.5">
        <Status status={status} />
      </div>
    </Card>
  )
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}
export default EventCard
