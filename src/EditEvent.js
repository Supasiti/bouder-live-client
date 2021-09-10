import { useParams } from 'react-router-dom'

const EditEvent = () => {
  const { eventId } = useParams()
  return <p>Edit event {eventId}</p>
}

export default EditEvent
