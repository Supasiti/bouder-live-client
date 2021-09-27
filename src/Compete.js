import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import EventTable from './components/EventTable'
import FilterableEventTable from './components/FilterableEventTable'
import Card from './elements/Card'
import Modal from './elements/Modal'
import Container from './elements/Container'
import FixedButton from './elements/FixedButton'

import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'

const Compete = () => {
  const [user, setUser] = useState(null)
  const [showModal, setShowModal] = useState(null)
  const { data: savedUser } = useLocalStorage('user', {})
  const { data: events } = useFetch(`api/events?competedBy=${savedUser.id}`, [])
  useEffect(() => {
    setUser(savedUser)
  }, [])

  const handleCloseModal = () => {
    if (showModal) setShowModal(false)
  }
  const handleOpenModal = () => {
    if (!showModal) setShowModal(true)
  }

  return (
    <div>
      <Navbar height="h-12 sm:h-16" />
      <main>
        <Container extraClasses="p-4 pt-16 sm:pt-20 relative lg:flex">
          {/* search button */}
          <div className="lg:hidden">
            <FixedButton position="right-6 top-20" onClick={handleOpenModal}>
              <i className="fas fa-search text-lg"></i>
            </FixedButton>
          </div>

          {/* main column */}
          <div className="w-full lg:w-3/4">
            {/* header */}
            <p className="text-center text-xl font-bold mt-8">Welcome back,</p>
            <h2 className="text-center text-5xl text-yellow-600 mt-2 mb-6">
              {user && user.username}
            </h2>
            <EventTable
              title="Your Running Events"
              events={events && events.filter((e) => e.status === 'running')}
              link="/c/events/"
            />
            <EventTable
              title="Your Future Events"
              events={
                events &&
                events.filter((e) => ['open', 'pending'].includes(e.status))
              }
              link="/c/events/"
            />
            <EventTable
              title="Your Past Events"
              events={
                events &&
                events.filter((e) => ['cancelled', 'ended'].includes(e.status))
              }
              link="/c/events/"
            />
          </div>

          {/* side column */}
          <div className="hidden lg:inline-block w-1/4 p-3">
            <Card color="greyLight" extraClasses="p-4">
              <FilterableEventTable />
            </Card>
          </div>

          <Modal show={showModal} onClose={handleCloseModal}>
            <FilterableEventTable />
          </Modal>
        </Container>
      </main>
    </div>
  )
}

export default Compete
