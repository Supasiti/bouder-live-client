import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import EventModal from './components/EventModal'
import EventTable from './components/EventTable'
import Container from './elements/Container'
import FixedButton from './elements/FixedButton'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'

const Organise = () => {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { data: savedUser } = useLocalStorage('user', {})
  const {
    data: events,
    isLoading,
    error,
  } = useFetch(`api/events?organisedBy=${savedUser.id}`, [])

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
    <div>
      <Navbar height="h-12 sm:h-16" />
      <main>
        <Container extraClasses="p-4 pt-16 sm:pt-20">
          {/* header */}
          <p className="text-center text-xl font-bold mt-8">Welcome back,</p>
          <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
            {user && user.username}
          </h2>
          {isLoading && <p>LOADING .... </p>}
          {error && <p>{error}</p>}
          <EventTable
            title="Your Running Events"
            events={events && events.filter((e) => e.status === 'running')}
            link="/o/events/"
          />
          <EventTable
            title="Your Future Events"
            events={
              events &&
              events.filter((e) => ['open', 'pending'].includes(e.status))
            }
            link="/o/events/"
          />
          <EventTable
            title="Your Past Events"
            events={
              events &&
              events.filter((e) => ['cancelled', 'ended'].includes(e.status))
            }
            link="/o/events/"
          />

          <EventModal show={showModal} onClose={handleCloseModal} />
          <FixedButton
            position="bottom-12 right-12"
            onClick={(e) => handleOpenModal(e, true)}
          >
            <i className="fas fa-plus text-lg"></i>
          </FixedButton>
        </Container>
      </main>
    </div>
  )
}

export default Organise
