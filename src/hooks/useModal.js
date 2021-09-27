import { useState } from 'react'

// custom hook that open/close modal
// return
const useModal = (defaultValue) => {
  const [isShowing, setShowing] = useState(defaultValue)

  const closeModal = () => {
    if (isShowing) setShowing(false)
  }
  const openModal = () => {
    if (!isShowing) setShowing(true)
  }

  return { openModal, closeModal, isShowing }
}

export default useModal
