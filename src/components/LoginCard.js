import Card from '../elements/Card'
import LoginForm from './LoginForm'

const LoginCard = () => (
  <div className="w-100 grid grid-cols-1">
    <div className="col-start-1 col-end-2 row-start-1 row-end-2 mx-2">
      <Card color="grey" />
    </div>
    <div
      className="m-2 relative
          col-start-1 col-end-2 row-start-1 row-end-2"
    >
      <Card color="brand" rotation="true" />
    </div>
    <div
      className="relative col-start-1 col-end-2 row-start-1 row-end-2
        w-96 max-w-xs 
        mx-auto mt-4 mb-2 -bottom-4 
        sm:mr-auto sm:-bottom-8 
        md:mr-8 md:-bottom-12 lg:mr-10"
    >
      <Card color="greyLight" extraClasses="p-4">
        <LoginForm />
      </Card>
    </div>
  </div>
)

export default LoginCard
