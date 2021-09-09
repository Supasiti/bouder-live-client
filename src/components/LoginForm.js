import { useState } from 'react'
import Radio from '../elements/Radio'
import TextInput from '../elements/TextInput'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [purpose, setPurpose] = useState('compete')

  const handleSumit = (event) => {
    event.preventDefault()
  }

  const handleEmailChange = (newEmail) => setEmail(newEmail)
  const handlePasswordChange = (newPassword) => setPassword(newPassword)
  const handlePurposeClicked = (newPurpose) => setPurpose(newPurpose)

  return (
    <form onSubmit={handleSumit} lassName="space-y-3">
      <h2 className="text-lg text-center font-bold">Please log in</h2>
      <TextInput
        type="email"
        name="email"
        placeholder="akiyo@email.com"
        onDataChange={handleEmailChange}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="password"
        onDataChange={handlePasswordChange}
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
          />
        </div>
        <div className="w-1/2">
          <Radio
            name="purpose"
            value="compete"
            onClick={handlePurposeClicked}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>

      <p>{email}</p>
      <p>{password}</p>
      <p>{purpose}</p>
    </form>
  )
}
export default LoginForm
