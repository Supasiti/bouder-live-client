import { useParams } from 'react-router-dom'
import EventForm from './components/EventForm'
import Card from './elements/Card'
import useFetch from './hooks/useFetch'

const EditEvent = () => {
  const { eventId } = useParams()
  const { data: eventData } = useFetch(`/api/events/${eventId}`)

  console.log(eventData)
  return (
    <div className="p-4">
      <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
        Your Event : {eventId}
      </h2>
      <div className="w-96 m-auto">
        <Card color="grayLight" extraClasses="p-4">
          <EventForm eventId={eventId} event={eventData || {}} />
        </Card>
      </div>
    </div>
  )
}

export default EditEvent
