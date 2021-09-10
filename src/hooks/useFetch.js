import { useState, useEffect } from 'react'

// custom hook that use a fetch promise
// return  {data, isLoading, error}
const useFetch = (fetchPromise) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchPromise()
        if (res.ok) {
          const newData = await res.json()
          setData(newData)
          setError(null)
          return
        }
        throw new Error('Cannot fetch the requested data')
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [])

  return { data, isLoading, error }
}

export default useFetch
