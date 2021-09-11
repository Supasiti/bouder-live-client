/* eslint-disable react/button-has-type */

import { PropTypes } from 'prop-types'

const acceptedTypes = ['button', 'submit', 'reset']

const RoundButton = (props) => {
  const { type } = props
  const value = acceptedTypes.includes(type) ? type : 'button'
  return (
    <button
      type={value}
      className="inline-block w-10 h-10 rounded-full btn-primary"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

RoundButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
}
export default RoundButton
