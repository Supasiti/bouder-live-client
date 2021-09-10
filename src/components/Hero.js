const Hero = () => (
  <div className="px-4 py-6 mt-6 mx-auto">
    {/*  title */}
    <h1 className="text-5xl text-gray-800 font-extralight mb-4 lg:mt-10">
      Boulder Live
    </h1>

    {/* subtitle */}
    <h2 className="text-2xl text-gray-800 font-extrabold">
      <span className="text-yellow-600">Organise</span> your climbing
    </h2>
    <h2 className="text-2xl text-gray-800 font-extrabold mb-8">
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
