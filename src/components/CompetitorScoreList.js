import CompetitorScoreRow from '../elements/CompetitorScoreRow'
import useLocalStorage from '../hooks/useLocalStorage'
import usePropState from '../hooks/usePropState'

const CompetitorScoreList = (props) => {
  const { data: competitor } = useLocalStorage('competitor', {})
  const { data: scores, setData: setScores } = usePropState(props, 'scores', [])

  const handleScoreChanged = async () => {
    const res = await fetch(`/api/scores?competitor=${competitor.id}`)
    if (res.ok) {
      const data = await res.json()
      setScores(data)
    }
  }

  return (
    <div className="w-full space-y-3">
      <h2 className="text-lg text-center font-bold mb-4">Your Scorecard</h2>

      {scores.map((score) => (
        <CompetitorScoreRow
          score={score}
          key={score.id}
          onScoreChanged={handleScoreChanged}
        />
      ))}
    </div>
  )
}

export default CompetitorScoreList
