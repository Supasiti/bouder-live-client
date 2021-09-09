import StackCard from '../elements/StackCard'
import LoginForm from './LoginForm'

const LoginCard = () => (
  <div className="w-100 grid grid-cols-1">
    <div className="col-start-1 col-end-2 row-start-1 row-end-2">
      <StackCard color="grey" />
    </div>
    <div
      className="m-1 relative
          col-start-1 col-end-2 row-start-1 row-end-2"
    >
      <StackCard color="brand" rotation="true" />
    </div>
    <div
      className="relative shadow-lg bg-gray-100 rounded-2xl
          w-96 max-w-xs 
          col-start-1 col-end-2 row-start-1 row-end-2
          ml-auto mt-4 mb-2 -bottom-4 
          sm:mr-auto sm:-bottom-8 
          md:mr-8 md:-bottom-12 lg:mr-
          px-4 pt-6 pb-4"
    >
      <LoginForm />
    </div>
  </div>
)

export default LoginCard
