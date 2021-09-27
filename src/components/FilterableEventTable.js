import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import EventSearchForm from './EventSearchForm'
import useFetch from '../hooks/useFetch'
import utils from '../utils/string'
import EventRow from '../elements/EventRow'

const FilterableEventTable = () => {
  const { data: events } = useFetch('/api/events/running', [])
  const [filtered, setFiltered] = useState([])
  const history = useHistory()

  // handle when search text change
  const handleInputChange = (input) => {
    if (input.trim() === '') {
      return setFiltered([])
    }
    const newFiltered = events.filter((e) => utils.isSubString(input, e.name))
    return setFiltered(newFiltered)
  }

  const handleSelect = (eventId) => {
    history.push(`/c/events/${eventId}`)
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <EventSearchForm events={events} onDataChange={handleInputChange} />

      {/* result */}
      <div className="w-full divide-y-2 divide-yellow-500">
        {filtered.map((f) => (
          <EventRow key={f.id} event={f} onClick={handleSelect} />
        ))}
      </div>
    </div>
  )
}

export default FilterableEventTable
