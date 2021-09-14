import { useEffect, useState } from 'react'

// custom hook that keep track with props being updated
// return [data, getData]
const usePropState = (props, key, defaultValue) => {
  const [data, setData] = useState(defaultValue)

  // update the when data changes
  useEffect(() => {
    if (props[key] !== undefined) {
      setData(props[key])
    }
  }, [props[key]])

  return { data, setData }
}

export default usePropState
