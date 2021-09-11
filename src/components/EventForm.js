import { useState } from 'react'
import { PropTypes } from 'prop-types'
import Select from '../elements/Select'
import TextInput from '../elements/TextInput'
import useUpdateState from '../hooks/useUpdateState'

const statuses = ['pending', 'open', 'running', 'cancelled', 'ended']

const EventForm = (props) => {
  const { eventId } = props

  const { data: event, setData: setEvent } = useUpdateState(props, 'event', {})
  const [error, setError] = useState(false)

  // handle user login submission - and go to the respective dashboard
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      })
      if (!res.ok) {
        throw new Error('cannot update the event data')
      }
      // need to some way to display that it has been updated
    } catch (err) {
      setError(true)
    }
  }

  // handle all the value changes
  const handleValueChange = (key, newValue) => {
    const newEvent = { ...event, [key]: newValue }
    setEvent(newEvent)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg text-center font-bold">Event Description</h2>
      <TextInput
        type="text"
        name="name"
        placeholder="Fun Bouldering Event"
        onDataChange={handleValueChange}
        isError={error}
        value={event.name}
      />
      <TextInput
        type="text"
        name="location"
        placeholder="Your Bouldering Gym"
        onDataChange={handleValueChange}
        isError={error}
        value={event.location}
      />
      <Select
        options={statuses}
        name="status"
        onDataChange={handleValueChange}
        value={event.status}
      />
      <button type="submit" className="btn btn-primary w-full">
        Save
      </button>
    </form>
  )
}

EventForm.propTypes = {
  eventId: PropTypes.string.isRequired,
}

export default EventForm
