import { useState } from 'react'

const tryGetStoredValue = (key, defaultValue) => {
  try {
    const saved = window.localStorage.getItem(key)

    return saved ? JSON.parse(saved) : defaultValue
  } catch (err) {
    console.error(err)
    return defaultValue
  }
}

// custom hook that interact with local storage
// return  {data, setData, error}
const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    tryGetStoredValue(key, defaultValue),
  )

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return { data: storedValue, setData: setValue }
}

export default useLocalStorage
