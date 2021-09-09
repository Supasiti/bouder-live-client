const Home = () => (
  <div>
    <div className="px-4 py-6 mt-6 mx-auto max-w-sm">
      <h1 className="text-5xl text-gray-800 font-extralight mb-4">
        Boulder Live
      </h1>
      <h2 className="text-2xl text-gray-800 font-extrabold">
        <span className="text-yellow-600">Organise</span> your climbing
      </h2>
      <h2 className="text-2xl text-gray-800 font-extrabold mb-8">
        <span className="text-yellow-600">competitions</span> with ease.
      </h2>
      <div className="mt-4">
        <a href="/" className="btn btn-primary mr-3">
          Sign Up Today
        </a>
        <a href="/g" className="btn btn-secondary">
          Scoreboards
        </a>
      </div>
    </div>

    <div className="grid grid-cols-1 w-full mt-4">
      <div
        className="bg-gray-300
    col-start-1 col-end-2 row-start-1 row-end-2 rounded-l-2xl"
      ></div>
      <div
        className="m-1 relative shadow-xl rounded-xl
    bg-gradient-to-br from-yellow-500 to-yellow-600
    col-start-1 col-end-2 row-start-1 row-end-2
    transform -rotate-6"
      ></div>
      <div
        className="relative shadow-lg bg-gray-100 rounded-l-2xl
    col-start-1 col-end-2 row-start-1 row-end-2
    ml-6 my-4 px-4 pt-6 pb-4"
      ></div>
    </div>
  </div>
)

export default Home
