import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import EventModal from './components/EventModal'
import EventTable from './components/EventTable'
import Container from './elements/Container'
import FixedButton from './elements/FixedButton'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'
import useModal from './hooks/useModal'

const Organise = () => {
  const [user, setUser] = useState(null)
  const { openModal, closeModal, isShowing } = useModal(false)
  const { data: savedUser } = useLocalStorage('user', {})
  const { data: events } = useFetch(
    `api/events?organisedBy=${savedUser.id}`,
    [],
  )

  useEffect(() => {
    setUser(savedUser)
  }, [])

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

          <EventModal show={isShowing} onClose={closeModal} />
          <FixedButton position="bottom-12 right-12" onClick={openModal}>
            <i className="fas fa-plus text-lg"></i>
          </FixedButton>
        </Container>
      </main>
    </div>
  )
}

export default Organise
