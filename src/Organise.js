import { useEffect, useState } from 'react'
import EventModal from './components/EventModal'
import EventTable from './components/EventTable'
import Container from './elements/Container'
import FixedButton from './elements/FixedButton'
import useFetch from './hooks/useFetch'

const Organise = () => {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const userId = savedUser.id
  const {
    data: events,
    isLoading,
    error,
  } = useFetch(`api/events?organised_by=${userId}`, [])

  useEffect(() => {
    setUser(savedUser)
  }, [])

  // opem-close modal
  const handleOpenModal = (e) => {
    e.preventDefault()
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Container>
      <p className="text-center text-xl font-bold mt-8">Welcome back,</p>
      <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
        {user && user.username}
      </h2>
      {isLoading && <p>LOADING .... </p>}
      {error && <p>{error}</p>}
      <EventTable
        title="Your Running Events"
        events={events && events.filter((e) => e.status === 'running')}
      />
      <EventTable
        title="Your Future Events"
        events={
          events && events.filter((e) => ['open', 'pending'].includes(e.status))
        }
      />
      <EventTable
        title="Your Past Events"
        events={
          events &&
          events.filter((e) => ['cancelled', 'ended'].includes(e.status))
        }
      />

      <EventModal show={showModal} onClose={handleCloseModal} />
      <FixedButton onClick={(e) => handleOpenModal(e, true)}>
        <i className="fas fa-plus text-lg"></i>
      </FixedButton>
    </Container>
  )
}

export default Organise
