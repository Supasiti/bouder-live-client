import { useParams } from 'react-router-dom'
import EventForm from './components/EventForm'
import Card from './elements/Card'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'
import CategoryList from './components/CagetoryList'
import ProblemList from './components/ProblemList'

const EditEvent = () => {
  const { eventId } = useParams()
  const { data: eventData } = useFetch(`/api/events/${eventId}`)

  //
  //
  //  Need to arrange elements
  //
  return (
    <Container>
      <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
        Your Event : {eventId}
      </h2>
      <div className="w-96 m-auto mb-4">
        <Card color="greyLight" extraClasses="p-4">
          <EventForm eventId={eventId} event={eventData && eventData.event} />
        </Card>
      </div>

      <div className="w-full m-auto mb-4">
        <Card color="greyLight" extraClasses="p-4">
          <CategoryList
            categories={eventData && eventData.categories}
            eventId={eventId}
          />
        </Card>
      </div>

      <div className="w-full m-auto mb-4">
        <Card color="greyLight" extraClasses="p-4">
          <ProblemList
            problems={eventData && eventData.problems}
            eventId={eventId}
          />
        </Card>
      </div>
    </Container>
  )
}

export default EditEvent
