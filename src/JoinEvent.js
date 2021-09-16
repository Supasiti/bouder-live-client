import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbar from './components/Navbar'
import CompetitorInfo from './components/CompetitorInfo'
import CompCategoryList from './components/CompCategoryList'
import CompetitorScoreList from './components/CompetitorScoreList'
import AvailableCategoryList from './components/AvailableCategoryList'
import Card from './elements/Card'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'

const availableCategories = (categories, compData) => {
  const result = categories.filter((c) => {
    if ('categoryIds' in compData) {
      return !compData.categoryIds.includes(c.id)
    }
    return false
  })
  return result
}

const yourCategories = (categories, compData) => {
  const result = categories.filter((c) => {
    if ('categoryIds' in compData) {
      return compData.categoryIds.includes(c.id)
    }
    return false
  })
  return result
}

const JoinEvent = () => {
  const { eventId } = useParams()
  const [compData, setCompData] = useState({})
  const { data: categories } = useFetch(
    `/api/categories?event_id=${eventId}`,
    [],
  )
  const available = availableCategories(categories, compData)
  const compCategories = yourCategories(categories, compData)
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const userId = savedUser.id
  const history = useHistory()

  // loading initial data
  useEffect(() => {
    const getCompData = async () => {
      const res = await fetch(`/api/events/${eventId}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })
      if (!res.ok) {
        history.go(-1)
      } else {
        const data = await res.json()
        localStorage.setItem('competitor', JSON.stringify(data.competitor))
        setCompData(data)
      }
    }

    getCompData()
  }, [])

  // handle category change
  const handleCategoryChanged = async () => {
    const res = await fetch(`/api/categories?event_id=${eventId}`)
    if (res.ok) {
      const data = await res.json()
      setCompData(data)
    }
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
            <div className="w-full md:w-2/3 lg:w-1/2 px-2">
              <Card color="greyLight" extraClasses="p-3">
                <CompetitorScoreList scores={compData && compData.scores} />
              </Card>
            </div>

            {/* right column */}
            <div className="hidden lg:inline-block lg:w-1/4 pl-2">
              <Card color="greyLight" extraClasses="p-3">
                <AvailableCategoryList
                  categories={available}
                  onCategoryChanged={handleCategoryChanged}
                />
              </Card>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default JoinEvent
