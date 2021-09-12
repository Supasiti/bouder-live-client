import { PropTypes } from 'prop-types'
import AssignmentCheckbox from '../elements/AssignmentCheckbox'
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
  const { data: assignments, serData: setAssignments } = usePropState(
    props,
    'assignments',
    [],
  )

  console.log(assignments)

  // handle when a checkbox is ticked
  const handleValueChange = (isChecked, problemId, categoryId) => {
    if (isChecked) {
      const assignment = assignments.find(
        (a) => a.problemId === problemId && a.categoryId === categoryId,
      )
      if (!assignment) {
        const newAssignment = [...assignment, { problemId, categoryId }]
        setAssignments(newAssignment)
      }
    } else {
      const newAssignment = assignments.filter(
        (a) => a.problemId !== problemId || a.categoryId !== categoryId,
      )
      setAssignments(newAssignment)
    }
  }

  return (
    <div className="flex space-x-1">
      {/*  row header */}
      <div className="w-32 h-8 rounded-md bg-gray-300 flex align-middle justify-end">
        <p className="text-right my-auto pr-4">{problem.name}</p>
      </div>
      {categories &&
        categories.map((category) => (
          <AssignmentCheckbox
            key={`${category.id}-${problem.id}`}
            problemId={problem.id}
            categoryId={category.id}
            onChange={handleValueChange}
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
