import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import EventForm from './components/EventForm'
import ProblemList from './components/ProblemList'
import CategoryList from './components/CagetoryList'
import AssignmentGrid from './components/AssignmentGrid'
import Card from './elements/Card'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'

const EditEvent = () => {
  const { eventId } = useParams()
  const { data: eventData, setData: setEventData } = useFetch(
    `/api/events/${eventId}`,
    {},
  )

  // update all data
  const handleEventChange = (key, newValue) => {
    if (key in eventData) {
      const newEventData = { ...eventData, [key]: newValue }
      setEventData(newEventData)
    }
  }
  return (
    <div>
      <Navbar height="h-12 sm:h-16" />
      <main>
        <Container extraClasses="p-4 pt-16 sm:pt-20">
          <div className="flex flex-wrap content-evenly items-start">
            <div className="w-full flex justify-between items-center p-2">
              <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
                Your Event
              </h2>
              <a
                href={`/events/${eventId}/scoreboard`}
                className="btn btn-primary"
              >
                Scoreboard
              </a>
            </div>
            <div className="w-full p-2">
              <Card color="greyLight" extraClasses="p-4">
                <EventForm
                  eventId={eventId}
                  event={eventData && eventData.event}
                  onUpdate={handleEventChange}
                />
              </Card>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <Card color="greyLight" extraClasses="p-4">
                <CategoryList
                  categories={eventData && eventData.categories}
                  eventId={eventId}
                  onUpdate={handleEventChange}
                />
              </Card>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <Card color="greyLight" extraClasses="p-4">
                <ProblemList
                  problems={eventData && eventData.problems}
                  eventId={eventId}
                  onUpdate={handleEventChange}
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
                  onUpdate={handleEventChange}
                />
              </Card>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default EditEvent
