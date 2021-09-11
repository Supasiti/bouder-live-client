import Hero from './components/Hero'
import LoginCard from './components/LoginCard'
import Container from './elements/Container'

const Home = () => (
  <Container>
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm md:w-1/2">
        <Hero />
      </div>

      <div
        className="w-full mt-4 
          sm:max-w-md sm:mx-auto
          md:w-1/2 md:mt-12 md:max-w-xl lg:max-w-4xl"
      >
        <LoginCard />
      </div>
    </div>
  </Container>
)

export default Home
