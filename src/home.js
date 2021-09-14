import Hero from './components/Hero'
import LoginCard from './components/LoginCard'
import Navbar from './components/Navbar'
import Container from './elements/Container'

const Home = () => (
  <div>
    <Navbar height="h-12 sm:h-16" />
    <main>
      <Container extraClasses="p-4 pt-16 sm:pt-20 md:pt-24">
        <div className="flex flex-wrap justify-center ">
          <div className="max-w-sm sm:py-10 md:w-1/2  md:px-6 md:py-12 lg:max-w-md">
            <Hero />
          </div>

          <div
            className="w-full mt-8 
              sm:max-w-md sm:mx-auto
              md:w-1/2   md:mx-0 md:mt-12 md:max-w-xl lg:max-w-4xl"
          >
            <LoginCard />
          </div>
        </div>
      </Container>
    </main>
  </div>
)

export default Home
