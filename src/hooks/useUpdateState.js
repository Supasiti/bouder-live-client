import { useEffect, useState } from 'react'

// custom hook that keep track with props being updated
// return [data, getData]
const useUpdateState = (props, key, defaultValue) => {
  const [data, setData] = useState(defaultValue)

  // update the when data changes
  useEffect(() => {
    if (props[key]) {
      setData(props[key])
    }
  }, [props[key]])

  return { data, setData }
}

export default useUpdateState
