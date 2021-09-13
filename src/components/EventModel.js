import Modal from '../elements/Modal'
import usePropState from '../hooks/usePropState'

const EventModal = (props) => {
  const { data: show } = usePropState(props, 'show', false)

  return (
    <Modal show={show}>
      <form>asdf</form>
    </Modal>
  )
}

export default EventModal
