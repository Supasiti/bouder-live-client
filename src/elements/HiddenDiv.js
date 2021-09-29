import { PropTypes } from 'prop-types'

const HiddenDiv = (props) => {
  const { isShowing } = props
  const extend = 'extend' in props ? props.extend : ''
  const style = `${isShowing ? '' : 'hidden'} ${extend}`

  return <div className={style}>{props.children}</div>
}

HiddenDiv.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  extend: PropTypes.string,
  children: PropTypes.node,
}
export default HiddenDiv
