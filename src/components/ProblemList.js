import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import ProblemCard from '../elements/ProblemCard'
import ProblemForm from './ProblemForm'

const ProblemList = (props) => {
  const { eventId } = props
  const { data: problems, setData: setProblems } = usePropState(
    props,
    'problems',
    [],
  )

  // handle when a category is deleted
  const handleDelete = (problemId) => {
    const newProblems = problems.filter((c) => c.id !== problemId)
    setProblems(newProblems)
    props.onUpdate('problems', newProblems)
  }

  // handle when a category is added
  const handleSave = (newProblem) => {
    const newProblems = [...problems, newProblem]
    setProblems(newProblems)
    props.onUpdate('problems', newProblems)
  }

  return (
    <div>
      <h3 className="text-lg text-center font-bold mb-4">Event Problems</h3>
      <div className="space-y-3 mb-3">
        {problems &&
          problems.map((p, index) => (
            <ProblemCard
              index={index + 1}
              id={p.id}
              key={p.id}
              name={p.name}
              onDelete={handleDelete}
            />
          ))}
      </div>

      <ProblemForm eventId={eventId} onSave={handleSave} />
    </div>
  )
}
ProblemList.propTypes = {
  eventId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
}
export default ProblemList
