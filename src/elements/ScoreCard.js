import { PropTypes } from 'prop-types'
import ScoreBox from './ScoreBox'

const ScoreCard = (props) => {
  const score = 'score' in props ? props.score : {}

  return (
    <div
      className="bg-gray-100 flex flex-wrap
        rounded-2xl relative
        lg:border-yellow-500 lg:border-t-2 lg:border-r-2 
        lg:p-2 lg:ml-4 lg:rounded-tl-none lg:rounded-br-none 
        xl:p-3"
    >
      {/* image */}
      <div
        className="lg:absolute lg:z-10 lg:-top-5 lg:-left-10 flex flex-grow
        items-end"
      >
        <div
          className="h-full flex-grow
            lg:w-20 lg:h-20 lg:rounded-full lg:p-0.5
            lg:border-yellow-500 lg:border-2"
        >
          <div
            className="w-full h-full bg-gray-400 
              rounded-tl-2xl rounded-bl-2xl
              lg:rounded-full lg:shadow-xl"
          ></div>
        </div>

        {/* Competitor name */}
        <p className="hidden xl:inline-block text-yellow-500 font-bold text-lg">
          {score.competitor.user.username}
        </p>
      </div>

      {/* scores */}
      <div
        className="min-w-min flex flex-col items-start p-3 pl-10
        lg:w-full lg:p-0 lg:pl-12 xl:items-end"
      >
        <p
          className="text-left w-full text-yellow-500 font-bold mb-2
             xl:hidden"
        >
          {score.competitor.user.username}
        </p>

        <div className="flex space-x-1">
          <div className="w-6 md:w-8 text-center">T</div>
          <div className="w-6 md:w-8 text-center">B</div>
          <div className="w-6 md:w-8 text-center">AT</div>
          <div className="w-6 md:w-8 text-center">AB</div>
          <div className="w-6 md:w-8 text-center">A</div>
        </div>
        <div className="flex justify-end space-x-1 ">
          <ScoreBox size={6} extend="md:w-8 md:h-8">
            <p className="text-center sm:text-lg">{score.tops}</p>
          </ScoreBox>
          <ScoreBox size={6} extend="md:w-8 md:h-8">
            <p className="text-center sm:text-lg">{score.bonuses}</p>
          </ScoreBox>
          <ScoreBox size={6} extend="md:w-8 md:h-8">
            <p className="text-center sm:text-lg">{score.attemptTop}</p>
          </ScoreBox>
          <ScoreBox size={6} extend="md:w-8 md:h-8">
            <p className="text-center sm:text-lg">{score.attemptBonus}</p>
          </ScoreBox>
          <ScoreBox size={6} extend="md:w-8 md:h-8">
            <p className="text-center sm:text-lg">{score.attempts}</p>
          </ScoreBox>
        </div>
      </div>
    </div>
  )
}

ScoreCard.propTypes = {
  score: PropTypes.object,
}

export default ScoreCard
