import { useEffect, useState } from 'react'
import EventTable from './components/EventTable'
import useFetch from './hooks/useFetch'

const Organise = () => {
  const [user, setUser] = useState(null)
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const userId = savedUser.id
  const fetchPromise = () => fetch(`api/events?organised_by=${userId}`)
  const { data: events, isLoading, error } = useFetch(fetchPromise)

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
      <EventTable title="Your Running Events" events={events || []} />
    </div>
  )
}

export default Organise
