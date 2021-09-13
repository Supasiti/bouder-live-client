/* eslint-disable react/button-has-type */

import { PropTypes } from 'prop-types'

const acceptedTypes = ['button', 'submit', 'reset']

const RoundButton = (props) => {
  const { type } = props
  const value = acceptedTypes.includes(type) ? type : 'button'
  const size = 'size' in props ? props.size : 10
  return (
    <button
      type={value}
      className={`inline-block w-${size} h-${size} rounded-full btn-primary`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

RoundButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
}
export default RoundButton
