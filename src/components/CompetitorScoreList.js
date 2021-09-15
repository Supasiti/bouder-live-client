import CompetitorScoreRow from '../elements/CompetitorScoreRow'
import usePropState from '../hooks/usePropState'

const CompetitorScoreList = (props) => {
  const { data: scores } = usePropState(props, 'scores', [])

  return (
    <div className="w-full space-y-3">
      <h2 className="text-lg text-center font-bold mb-4">Your Scorecard</h2>

      {scores.map((score) => (
        <CompetitorScoreRow score={score} key={score.id} />
      ))}
    </div>
  )
}

export default CompetitorScoreList
