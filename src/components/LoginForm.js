import Radio from '../elements/Radio'
import TextInput from '../elements/TextInput'

const LoginForm = () => (
  <form className="space-y-3">
    <h2 className="text-lg text-center font-bold">Please log in</h2>
    <TextInput name="email" placeholder="akiyo@email.com" />
    <TextInput name="password" placeholder="password" />
    <p
      className="w-full text-lg mb-3 text-center text-gray-700 
        font-bold"
    >
      What would you like to do?
    </p>
    <div className="flex mb-3">
      <div className="w-1/2">
        <Radio name="purpose" value="organise" />
      </div>
      <div className="w-1/2">
        <Radio name="purpose" value="compete" />
      </div>
    </div>

    <button type="submit" className="btn btn-primary w-full">
      Login
    </button>
  </form>
)

export default LoginForm
