import { useState } from 'react'

const validateArg = (arg) => {
  if (typeof arg !== 'boolean') {
    return false
  }
  return arg
}

// custom hook that toggle state
// return
const useToggle = (defaultValue) => {
  const defaultTruthy = validateArg(defaultValue)
  const [state, setState] = useState(defaultTruthy)

  const toggleState = (e) => {
    e.preventDefault()

    if (!state) {
      setState(true)
    } else {
      setState(false)
    }
  }
  return { toggleState, state }
}

export default useToggle
