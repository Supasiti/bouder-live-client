import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Modal from '../elements/Modal'
import TextInput from '../elements/TextInput'
import usePropState from '../hooks/usePropState'

const defaultEvent = {
  name: '',
  location: '',
}
const EventModal = (props) => {
  const { data: show } = usePropState(props, 'show', false)
  const [event, setEvent] = useState(defaultEvent)
  const [error, setError] = useState(false)
  const history = useHistory()
  let userId
  try {
    userId = JSON.parse(localStorage.getItem('user')).id
  } catch (err) {
    console.error(err)
  }

  // handle value changed
  const handleValueChange = (key, newValue) => {
    if (key in event) {
      const newEvent = { ...event, [key]: newValue }
      setEvent(newEvent)
      setError(false)
    }
  }

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...event, userId }),
      })
      if (!res.ok) {
        throw new Error('cannot create the event')
      }
      const data = await res.json()
      history.push(`/o/events/${data.id}`)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <Modal show={show} onClose={props.onClose}>
      <div className="px-3">
        <h3 className="text-xl font-bold my-4">Create Your Event</h3>
        <form className="pb-2" onSubmit={handleSubmit}>
          <div className="space-y-3 mb-5">
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

          <button type="submit" className="btn btn-primary w-full">
            <i className="far fa-save text-xl"></i>
          </button>
        </form>
      </div>
    </Modal>
  )
}
EventModal.propTypes = {
  onClose: PropTypes.func,
}
export default EventModal
