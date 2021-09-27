const Hero = () => (
  <div className="mx-auto">
    {/*  title */}
    <h1
      className="text-3xl text-gray-800 font-extralight mb-3 
      md:text-4xl lg:mt-10 lg:text-5xl"
    >
      Boulder Live
    </h1>

    {/* subtitle */}
    <h2
      className="text-xl text-gray-800 font-extrabold 
        md:text-2xl lg:text-3xl"
    >
      <span className="text-yellow-600">Organise</span> your climbing
    </h2>
    <h2
      className="text-xl text-gray-800 font-extrabold mb-6 
        md:text-2xl lg:text-3xl"
    >
      <span className="text-yellow-600">competitions</span> with ease.
    </h2>

    {/* buttons */}
    <div className="mt-4">
      <a href="/" className="btn btn-primary mr-2">
        Sign Up Today
      </a>
      <a href="/g" className="btn btn-secondary">
        Scoreboards
      </a>
    </div>
  </div>
)

export default Hero
