import { useState } from 'react'
import { PropTypes } from 'prop-types'
import Select from '../elements/Select'
import TextInput from '../elements/TextInput'

const statuses = ['pending', 'open', 'running', 'cancelled', 'ended']

const EventForm = (props) => {
  const { eventId, event } = props
  const defaultEvent = {
    name: '',
    location: '',
    status: 'pending',
  }
  const eventData = event || defaultEvent

  console.log(eventData.status)
  const [name, setName] = useState(eventData.name)
  const [location, setLocation] = useState(eventData.location)
  const [status, setStatus] = useState(eventData.status)
  const [error, setError] = useState(false)

  // handle user login submission - and go to the respective dashboard
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newEventData = { name, location, status }
    try {
      const res = fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEventData),
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)

        // clear form
        return
      }
      throw new Error('cannot update the event data')
    } catch (err) {
      setError(err.message)
    }
  }

  // handle all the value changes
  const handleNameChange = (newName) => {
    setName(newName)
    setError(false)
  }

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
    setError(false)
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg text-center font-bold">Event Description</h2>
      <TextInput
        type="text"
        name="name"
        placeholder="Fun Bouldering Event"
        onDataChange={handleNameChange}
        isError={error}
        value={name}
      />
      <TextInput
        type="text"
        name="location"
        placeholder="Your Bouldering Gym"
        onDataChange={handleLocationChange}
        isError={error}
        value={location}
      />
      <Select
        options={statuses}
        name="status"
        onDataChange={handleStatusChange}
        value={status}
      />
      <button type="submit" className="btn btn-primary w-full">
        Save
      </button>
    </form>
  )
}

EventForm.propTypes = {
  eventId: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
}

export default EventForm
