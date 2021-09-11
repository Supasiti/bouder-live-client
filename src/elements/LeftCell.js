import { PropTypes } from 'prop-types'

const LeftCell = (props) => (
  <div
    className={`p-4 rounded-l-2xl
      bg-gradient-to-br from-yellow-500 to-yellow-600
      text-gray-100 flex content-center justify-end
      ${props.width}`}
  >
    {props.children}
  </div>
)

LeftCell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}
export default LeftCell
