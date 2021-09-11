import { PropTypes } from 'prop-types'

const RightCell = (props) => (
  <div
    className={`pr-4 flex flex-col justify-center items-end
      ${props.width}`}
  >
    {props.children}
  </div>
)

RightCell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}
export default RightCell
