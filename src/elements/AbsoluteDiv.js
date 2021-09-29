import { PropTypes } from 'prop-types'

const AbsoluteDiv = (props) => (
  <div className={`absolute ${props.pos}`}>{props.children}</div>
)

AbsoluteDiv.propTypes = {
  pos: PropTypes.string.isRequired,
  children: PropTypes.node,
}
export default AbsoluteDiv
