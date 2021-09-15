import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import CompetitorInfo from './components/CompetitorInfo'
import Card from './elements/Card'
import Container from './elements/Container'

const JoinEvent = () => {
  const { eventId } = useParams()
  const [compData, setCompData] = useState({})
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const userId = savedUser.id
  const history = useHistory()

  console.log(compData)
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
        setCompData(data)
      }
    }

    getCompData()
  }, [])

  return (
    <main>
      <Container extraClasses="p-4 pt-16 sm:pt-20 relative">
        <div className="flex flex-row justify-between items-start">
          {/* left column */}
          <div className="w-1/4 pr-2">
            <Card color="greyLight" extraClasses="p-3">
              <CompetitorInfo
                name={savedUser.username}
                competitor={compData && compData.competitor}
              />
            </Card>
          </div>

          {/* main column */}
          <div className="w-1/2 px-2">
            <Card color="greyLight" extraClasses="p-3">
              Hello
            </Card>
          </div>

          {/* right column */}
          <div className="w-1/4 pl-2">
            <Card color="greyLight" extraClasses="p-3">
              Hello
            </Card>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default JoinEvent
