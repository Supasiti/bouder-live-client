import { PropTypes } from 'prop-types'
import RoundButton from './RoundButton'

const FixedButton = (props) => (
  <div className="fixed z-10 bottom-12 right-12">
    <RoundButton size={16} type="button" onClick={props.onClick}>
      {props.children}
    </RoundButton>
  </div>
)
FixedButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}
export default FixedButton
