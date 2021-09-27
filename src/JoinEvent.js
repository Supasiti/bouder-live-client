import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbar from './components/Navbar'
import CompetitorInfo from './components/CompetitorInfo'
import CompCategoryList from './components/CompCategoryList'
import CompetitorScoreList from './components/CompetitorScoreList'
import AvailableCategoryList from './components/AvailableCategoryList'
import Card from './elements/Card'
import Modal from './elements/Modal'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'
import fetching from './utils/fetch'
import useLocalStorage from './hooks/useLocalStorage'

const availableCategories = (categories, compData) => {
  const result = categories.filter((c) => {
    if ('categories' in compData) {
      return !compData.categories.map(({ id }) => id).includes(c.id)
    }
    return false
  })
  return result
}

const JoinEvent = () => {
  const { eventId } = useParams()
  const [compData, setCompData] = useState({})
  const [showModal, setShowModal] = useState(null)
  const { data: categories } = useFetch(`/api/categories?event=${eventId}`, [])
  const { data: savedUser } = useLocalStorage('user', {})
  const { setData: saveCompetitor } = useLocalStorage('competitor', {})
  const history = useHistory()

  const available = availableCategories(categories, compData)
  const compCategories = 'categories' in compData ? compData.categories : []

  // loading initial data
  useEffect(() => {
    const getCompData = async () => {
      const res = await fetching.joinEvent(eventId, savedUser.id)
      if (!res.ok) {
        history.go(-1)
      } else {
        const data = await res.json()
        saveCompetitor(data.competitor)
        setCompData(data)
      }
    }

    getCompData()
  }, [])

  // reload page
  const reload = async () => {
    try {
      const newRes = await fetching.joinEvent(eventId, savedUser.id)
      if (newRes.ok) {
        const data = await newRes.json()
        setCompData(data)
        handleCloseModal()
      }
    } catch (err) {
      console.error(err)
    }
  }

  // handle open modal for avaiable category
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
        <Container extraClasses="p-4 pt-16 sm:pt-20 relative">
          <div className="flex flex-row justify-between items-start">
            {/* left column */}
            <div
              className="hidden pr-2 md:inline-block md:w-1/3 
              lg:w-1/4 space-y-4"
            >
              <Card color="greyLight" extraClasses="p-3">
                <CompetitorInfo
                  name={savedUser.username}
                  competitor={compData && compData.competitor}
                />
              </Card>

              <Card color="greyLight" extraClasses="p-3">
                <CompCategoryList categories={compCategories} />
              </Card>
            </div>

            {/* main column */}
            <div className="w-full md:w-2/3 lg:w-1/2 px-2 space-y-4 lg:space-y-0">
              <button
                type="button"
                className="btn btn-primary w-full lg:hidden"
                onClick={handleOpenModal}
              >
                Join a category
              </button>

              <Card color="greyLight" extraClasses="p-3">
                <CompetitorScoreList scores={compData && compData.scores} />
              </Card>
            </div>

            {/* right column */}
            <div className="hidden lg:inline-block lg:w-1/4 pl-2">
              <Card color="greyLight" extraClasses="p-3">
                <AvailableCategoryList
                  categories={available}
                  onCategoryChanged={reload}
                />
              </Card>
            </div>
          </div>

          {/* modal for joining category */}
          <Modal show={showModal} onClose={handleCloseModal}>
            <AvailableCategoryList
              categories={available}
              onCategoryChanged={reload}
            />
          </Modal>
        </Container>
      </main>
    </div>
  )
}

export default JoinEvent
