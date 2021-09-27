import { PropTypes } from 'prop-types'
import Card from '../elements/Card'
import ScoreCard from '../elements/ScoreCard'

const CategoryScoreBoard = (props) => {
  const category = 'category' in props ? props.category : {}
  const totalScores = 'total_scores' in category ? category.total_scores : []

  return (
    <Card color="greyLight" extraClasses="p-2 sm:p-3">
      {/* title */}
      <h2
        className="mt-3 text-center font-bold text-yellow-500 
        text-2xl uppercase"
      >
        {category.name}
      </h2>

      {/* scores */}
      <div className="space-y-6 mt-4 sm:mt-8">
        {totalScores.map((score) => (
          <ScoreCard score={score} key={score.id} />
        ))}
      </div>
    </Card>
  )
}

CategoryScoreBoard.propTypes = {
  category: PropTypes.object,
}

export default CategoryScoreBoard
