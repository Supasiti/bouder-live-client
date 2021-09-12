import { useState } from 'react'
import { PropTypes } from 'prop-types'
import Select from '../elements/Select'
import TextInput from '../elements/TextInput'
import usePropState from '../hooks/usePropState'

const statuses = ['pending', 'open', 'running', 'cancelled', 'ended']

const EventForm = (props) => {
  const { eventId } = props
  const { data: event, setData: setEvent } = usePropState(props, 'event', {})
  const [error, setError] = useState(false)

  // handle user login submission - and go to the respective dashboard
  const handleSubmit = async (e) => {
    e.preventDefault()

    props.onUpdate('event', event)
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
      <h3 className="text-lg text-center font-bold">Event Description</h3>
      <div className="flex flex-wrap items-end">
        <div className="w-full md:w-1/3 p-2">
          <TextInput
            type="text"
            name="name"
            idName="name"
            label="name"
            placeholder="Fun Bouldering Event"
            onDataChange={handleValueChange}
            isError={error}
            value={event.name}
          />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <TextInput
            type="text"
            name="location"
            idName="location"
            label="location"
            placeholder="Your Bouldering Gym"
            onDataChange={handleValueChange}
            isError={error}
            value={event.location}
          />
        </div>
        <div className="w-full md:w-1/6 p-2">
          <Select
            options={statuses}
            name="status"
            label="status"
            onDataChange={handleValueChange}
            value={event.status}
          />
        </div>
        <div className="w-full md:w-1/6 p-2">
          <button type="submit" className="btn btn-primary w-full">
            <i className="far fa-save text-xl"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

EventForm.propTypes = {
  eventId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
}

export default EventForm
