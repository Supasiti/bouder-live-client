import TextInput from '../elements/TextInput'

const LoginForm = () => (
  <form className="space-y-3">
    <TextInput name="email" placeholder="akiyo@email.com" />
    <TextInput name="password" placeholder="password" />
  </form>
)

export default LoginForm
