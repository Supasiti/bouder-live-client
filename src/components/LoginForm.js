import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Radio from '../elements/Radio'
import TextInput from '../elements/TextInput'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [purpose, setPurpose] = useState('compete')
  const [error, setError] = useState(false)
  const history = useHistory()

  // handle user login submission - and go to the respective dashboard
  const handleSubmit = async (event) => {
    event.preventDefault()

    const user = { email, password }
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('purpose', JSON.stringify(purpose))
      history.push(`/${purpose}`)
    } else {
      setError(true)
    }
  }

  // handle all the value changes
  const handleDataChange = (key, newData) => {
    if (key === 'email') {
      setEmail(newData)
    }
    if (key === 'purpose') {
      setPurpose(newData)
    }
    if (key === 'password') {
      setPassword(newData)
    }
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg text-center font-bold">Please log in</h2>
      <TextInput
        type="email"
        name="email"
        idName="email"
        label="email"
        placeholder="akiyo@email.com"
        onDataChange={handleDataChange}
        isError={error}
      />
      <TextInput
        type="password"
        name="password"
        idName="password"
        label="password"
        placeholder="password"
        onDataChange={handleDataChange}
        isError={error}
      />
      <p
        className="w-full text-lg mb-3 text-center text-gray-700 
        font-bold"
      >
        What would you like to do?
      </p>
      <div className="flex mb-3">
        <div className="w-1/2">
          <Radio
            name="purpose"
            value="organise"
            onClick={handleDataChange}
            isChecked={purpose === 'organise'}
          />
        </div>
        <div className="w-1/2">
          <Radio
            name="purpose"
            value="compete"
            onClick={handleDataChange}
            isChecked={purpose === 'compete'}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>
    </form>
  )
}
export default LoginForm
