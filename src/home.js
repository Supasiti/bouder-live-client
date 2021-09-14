import Hero from './components/Hero'
import LoginCard from './components/LoginCard'
import Navbar from './components/Navbar'
import Container from './elements/Container'

const Home = () => (
  <div>
    <Navbar height="h-12 sm:h-16" />
    <main>
      <Container extraClasses="p-4 pt-16 sm:pt-20">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm md:w-1/2">
            <Hero />
          </div>

          <div
            className="w-full mt-8 
              sm:max-w-md sm:mx-auto
              md:w-1/2 md:mt-12 md:max-w-xl lg:max-w-4xl"
          >
            <LoginCard />
          </div>
        </div>
      </Container>
    </main>
  </div>
)

export default Home
