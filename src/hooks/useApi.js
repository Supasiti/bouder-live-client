import { useState } from 'react'

// custom hook that call api
// argument: function of form : (data) => fetch()
// return  {callApi, isLoading, error, setError}
const useApi = (fetchApi) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const callApi = async (data) => {
    setIsLoading(true)
    try {
      const res = await fetchApi(data)
      if (res.ok) {
        const newData = await res.json()
        setError('')
        return newData
      }
      const json = await res.json()
      throw new Error(json.message)
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { callApi, isLoading, error, setError }
}

export default useApi
