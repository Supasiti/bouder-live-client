import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import RoundButton from './RoundButton'
import HiddenDiv from './HiddenDiv'

//  styling
const blurBackground = `
    fixed top-0 left-0 w-full h-full z-50 bg-gray-500 
    bg-opacity-50 backdrop-filter backdrop-blur-sm `

const centeringContainer = `
  w-full max-w-md h-full py-10 px-6 mx-auto flex 
  items-center`

const modalCard = `
  relative w-full bg-gray-200 rounded-2xl shadow-2xl 
  p-4 mx-auto`

//  rendering modal
const Modal = (props) => {
  const { data: show, setData: setShow } = usePropState(props, 'show', false)

  const handleCloseModal = (e) => {
    e.preventDefault()
    setShow(false)
    if ('onClose' in props) {
      props.onClose()
    }
  }

  return (
    <HiddenDiv isShowing={show} extend={blurBackground}>
      <div className={centeringContainer}>
        <div className={modalCard}>
          {/* close button */}
          <div className="absolute z-10 -top-2.5 -right-2.5">
            <RoundButton type="button" onClick={handleCloseModal}>
              <i className="fas fa-times text-lg"></i>
            </RoundButton>
          </div>
          {props.children}
        </div>
      </div>
    </HiddenDiv>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}
export default Modal
