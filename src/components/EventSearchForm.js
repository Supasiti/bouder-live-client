import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'

const EventSearchForm = (props) => {
  // handle data changed
  const handleDataChanged = (name, value) => {
    props.onDataChange(value)
  }

  return (
    <form>
      <div className="w-full flex items-end ">
        <TextInput
          type="text"
          name="name"
          idName="event-name"
          label="name"
          placeholder="Event Name"
          onDataChange={handleDataChanged}
        />
      </div>
    </form>
  )
}

EventSearchForm.propTypes = {
  onDataChange: PropTypes.func.isRequired,
}
export default EventSearchForm
