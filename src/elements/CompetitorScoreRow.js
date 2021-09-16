import usePropState from '../hooks/usePropState'
import Card from './Card'
import RoundButton from './RoundButton'
import ScoreBox from './ScoreBox'

const defaultScore = {
  top: false,
  bonus: false,
  attemptTop: 0,
  attemptBonus: 0,
  attempts: 0,
  problem: { name: '' },
}

const CompetitorScoreRow = (props) => {
  const { data: score } = usePropState(props, 'score', defaultScore)
  const colorTop = score.top ? 'bg-gray-400' : ''
  const colorBonus = score.bonus ? 'bg-gray-400' : ''

  return (
    <Card color="greyLighter" shadow={false} extraClasses="p-3">
      <div className="grid grid-cols-6 gap-2">
        {/* problem name */}
        <div className="flex items-center col-span-4 sm:col-span-1">
          <p className="text-left text-yellow-500">{score.problem.name}</p>
        </div>

        {/* Scores */}
        <div className="flex flex-col items-center col-span-6 sm:col-span-3">
          <div className="flex space-x-1">
            <div className="w-8 text-center">T</div>
            <div className="w-8 text-center">B</div>
            <div className="w-8 text-center">AT</div>
            <div className="w-8 text-center">AB</div>
            <div className="w-8 text-center">A</div>
          </div>
          <div className="flex space-x-1">
            <ScoreBox color={colorTop}>
              {score.top && (
                <span
                  className="flex-grow text-center text-gray-100 
                fas fa-check text-lg"
                ></span>
              )}
            </ScoreBox>
            <ScoreBox color={colorBonus}>
              {score.bonus && (
                <span
                  className="flex-grow text-center text-gray-100 
                fas fa-check text-lg"
                ></span>
              )}
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attemptTop}</p>
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attemptBonus}</p>
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attempts}</p>
            </ScoreBox>
          </div>
        </div>

        {/* add scores */}

        <div className="hidden sm:flex items-center justify-end space-x-1 col-span-2">
          <RoundButton>+T</RoundButton>
          <RoundButton>+B</RoundButton>
          <RoundButton>+A</RoundButton>
        </div>

        <div
          className="absolute sm:hidden -top-1 -right-1 flex items-center justify-end space-x-1
          row-start-1 col-start-5 col-span-2"
        >
          <RoundButton>+</RoundButton>
        </div>
      </div>
    </Card>
  )
}

export default CompetitorScoreRow
