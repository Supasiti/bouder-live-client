import { useEffect, useState } from 'react'

const Organise = (props) => {
  const { purpose } = 'purpose' in props && props

  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'))
    setUser(savedUser)
  }, [])

  return (
    <div>
      <h2>Welcome back, {user && user.username}</h2>
      <p>{purpose}</p>
    </div>
  )
}

export default Organise
