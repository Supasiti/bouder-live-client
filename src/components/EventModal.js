import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Modal from '../elements/Modal'
import TextInput from '../elements/TextInput'
import usePropState from '../hooks/usePropState'
import useLocalStorage from '../hooks/useLocalStorage'
import api from '../utils/fetch'
import useApi from '../hooks/useApi'

const defaultEvent = {
  name: '',
  location: '',
}
const EventModal = (props) => {
  const { data: show } = usePropState(props, 'show', false)
  const [event, setEvent] = useState(defaultEvent)
  const { data: savedUser } = useLocalStorage('user', {})
  const history = useHistory()
  const { callApi, error, setError } = useApi(api.createEvent)

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

    const eventData = { ...event, userId: savedUser.id }
    const resData = await callApi(eventData)
    if (resData) history.push(`/o/events/${resData.id}`)
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
              isError={!!error}
              value={event.name}
            />
            <TextInput
              type="text"
              name="location"
              idName="location"
              label="location"
              placeholder="Your Bouldering Gym"
              onDataChange={handleValueChange}
              isError={!!error}
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
