import { useParams } from 'react-router-dom'
import CategoryScoreBoard from './components/CategoryScoreBoard'
import Navbar from './components/Navbar'
import Container from './elements/Container'
import useFetch from './hooks/useFetch'

const Scoreboard = () => {
  const { eventId } = useParams()
  const { data: categories } = useFetch(`/api/events/${eventId}/scoreboard`, [])

  return (
    <div>
      <Navbar height="h-12 sm:h-16" />
      <main>
        <Container extraClasses="px-2 sm:px-4 pt-16 sm:pt-20">
          <div className="flex flex-wrap justify-center items-start">
            {categories.map((category) => (
              <div
                className="w-full max-w-xs mt-4
                  sm:max-w-sm sm:w-1/2 sm:p-3 lg:max-w-md lg:w-1/3 "
                key={category.id}
              >
                <CategoryScoreBoard category={category} />
              </div>
            ))}
          </div>
        </Container>
      </main>
    </div>
  )
}
export default Scoreboard
