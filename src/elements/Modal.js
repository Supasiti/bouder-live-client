import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import RoundButton from './RoundButton'

const Modal = (props) => {
  const { data: show, setData: setShow } = usePropState(props, 'show', false)
  const showClass = show ? 'block' : 'hidden'

  const handleCloseModal = (e) => {
    e.preventDefault()
    setShow(false)
  }

  return (
    // blur background
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 bg-gray-500 
        bg-opacity-50 backdrop-filter backdrop-blur-sm 
        ${showClass}`}
    >
      {/* centering content */}
      <div
        className="w-full max-w-md h-full py-10 px-6 mx-auto flex 
        items-center"
      >
        {/* modal card */}
        <div
          className="relative w-full h-96 bg-gray-200 rounded-2xl shadow-2xl 
        p-4 mx-auto"
        >
          {/* close button */}
          <div className="absolute z-10 top-6 right-6">
            <RoundButton type="button" onClick={handleCloseModal}>
              <i className="fas fa-times text-lg"></i>
            </RoundButton>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
}
export default Modal
