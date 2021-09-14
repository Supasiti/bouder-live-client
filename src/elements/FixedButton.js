import { PropTypes } from 'prop-types'
import RoundButton from './RoundButton'

const FixedButton = (props) => (
  <div className={`fixed z-10 ${props.position}`}>
    <RoundButton size={16} type="button" onClick={props.onClick}>
      {props.children}
    </RoundButton>
  </div>
)

FixedButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  position: PropTypes.string,
}
export default FixedButton
