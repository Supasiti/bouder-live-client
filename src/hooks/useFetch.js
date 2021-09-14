import { useState, useEffect } from 'react'

// custom hook that use a fetch promise
// return  {data, isLoading, error}
const useFetch = (url, defaultData) => {
  const [data, setData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) {
          const newData = await res.json()
          setData(newData)
          setError('')
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

  return { data, setData, isLoading, error }
}

export default useFetch
