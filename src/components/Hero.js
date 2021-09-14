const Hero = () => (
  <div className="mx-auto">
    {/*  title */}
    <h1 className="text-3xl text-gray-800 font-extralight mb-3 lg:mt-10">
      Boulder Live
    </h1>

    {/* subtitle */}
    <h2 className="text-xl text-gray-800 font-extrabold">
      <span className="text-yellow-600">Organise</span> your climbing
    </h2>
    <h2 className="text-xl text-gray-800 font-extrabold mb-6">
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
