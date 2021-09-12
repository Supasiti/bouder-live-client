import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'

const isInAssignment = (problemId, categoryId, assignments) => {
  const result = assignments.find(
    (a) => a.problemId === problemId && a.categoryId === categoryId,
  )
  console.log(!!result)
  return !!result
}
const AssignmentRow = (props) => {
  const { problem, categories } = props
  const { data: assignments } = usePropState(props, 'assignment', [])

  return (
    <div className="flex space-x-1">
      {/*  row header */}
      <div className="w-32 h-8 rounded-md bg-gray-300 flex align-middle justify-end">
        <p className="text-right my-auto pr-4">{problem.name}</p>
      </div>
      {categories &&
        categories.map((category) => (
          <input
            key={`${category.id}-${problem.id}`}
            type="checkbox"
            className="w-8 h-8 border-gray-400 border-2 border-opacity-75
              text-yellow-500 rounded-md
              focus:ring-yellow-500 focus:border-yellow-500
              focus:text-yellow-500 focus-visible:text-yellow-500"
            checked={isInAssignment(problem.id, category.id, assignments)}
          />
        ))}
    </div>
  )
}
AssignmentRow.propTypes = {
  problem: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
export default AssignmentRow
