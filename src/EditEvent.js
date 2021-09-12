import { useParams } from 'react-router-dom'
import EventForm from './components/EventForm'
import Card from './elements/Card'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'
import CategoryList from './components/CagetoryList'
import ProblemList from './components/ProblemList'
import AssignmentGrid from './components/AssignmentGrid'

const EditEvent = () => {
  const { eventId } = useParams()
  const { data: eventData } = useFetch(`/api/events/${eventId}`)

  //
  //
  //  Need to arrange elements
  //
  return (
    <Container>
      <div className="flex flex-wrap content-evenly items-start">
        <div className="w-full md:w-1/2 p-2">
          <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
            Your Event : {eventId}
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Card color="greyLight" extraClasses="p-4">
            <EventForm eventId={eventId} event={eventData && eventData.event} />
          </Card>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Card color="greyLight" extraClasses="p-4">
            <CategoryList
              categories={eventData && eventData.categories}
              eventId={eventId}
            />
          </Card>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Card color="greyLight" extraClasses="p-4">
            <ProblemList
              problems={eventData && eventData.problems}
              eventId={eventId}
            />
          </Card>
        </div>
        <div className="w-full p-2">
          <Card color="greyLight" extraClasses="p-4">
            <AssignmentGrid
              problems={eventData && eventData.problems}
              categories={eventData && eventData.categories}
              assignments={eventData && eventData.assignments}
              eventId={eventId}
            />
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default EditEvent
