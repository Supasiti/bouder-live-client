import { useState, useEffect } from 'react'

// custom hook that use a fetch promise
// return  {data, isLoading, error}
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
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

    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
