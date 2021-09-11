import { useEffect, useState } from 'react'
import EventTable from './components/EventTable'
import useFetch from './hooks/useFetch'

const Organise = () => {
  const [user, setUser] = useState(null)
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const userId = savedUser.id
  const {
    data: events,
    isLoading,
    error,
  } = useFetch(`api/events?organised_by=${userId}`)

  useEffect(() => {
    setUser(savedUser)
  }, [])

  return (
    <div className="p-4">
      <p className="text-center text-xl font-bold mt-8">Welcome back,</p>
      <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
        {user && user.username}
      </h2>
      {isLoading && <p>LOADING .... </p>}
      {error && <p>{error}</p>}
      <EventTable
        title="Your Running Events"
        events={(events && events.filter((e) => e.status === 'running')) || []}
      />
      <EventTable
        title="Your Future Events"
        events={
          (events &&
            events.filter((e) => ['open', 'pending'].includes(e.status))) ||
          []
        }
      />
      <EventTable
        title="Your Past Events"
        events={
          (events &&
            events.filter((e) => ['cancelled', 'ended'].includes(e.status))) ||
          []
        }
      />
    </div>
  )
}

export default Organise