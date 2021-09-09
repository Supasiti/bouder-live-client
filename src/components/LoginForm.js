import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import Radio from '../elements/Radio'
import TextInput from '../elements/TextInput'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [purpose, setPurpose] = useState('compete')
  const [error, setError] = useState(false)
  // const history = useHistory()

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
      console.log(data)
      console.log(purpose)
      localStorage.setItem('user', JSON.stringify(data))
      // history.push(`/dashboard/${purpose}`)
    } else {
      console.log('wrong password')
      setError(true)
    }
  }

  const handleEmailChange = (newEmail) => setEmail(newEmail)
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword)
    setError(false)
  }
  const handlePurposeClicked = (newPurpose) => {
    setPurpose(newPurpose)
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-lg text-center font-bold">Please log in</h2>
      <TextInput
        type="email"
        name="email"
        placeholder="akiyo@email.com"
        onDataChange={handleEmailChange}
        isError={error}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="password"
        onDataChange={handlePasswordChange}
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
            onClick={handlePurposeClicked}
            isChecked={purpose === 'organise'}
          />
        </div>
        <div className="w-1/2">
          <Radio
            name="purpose"
            value="compete"
            onClick={handlePurposeClicked}
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
