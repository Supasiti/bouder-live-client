import { PropTypes } from 'prop-types'
import AssignmentCheckbox from '../elements/AssignmentCheckbox'
import usePropState from '../hooks/usePropState'

const isInAssignment = (problemId, categoryId, assignments) => {
  const result = assignments.find(
    (a) => a.problemId === problemId && a.categoryId === categoryId,
  )
  return !!result
}

const AssignmentRow = (props) => {
  const { problem, categories } = props
  const { data: assignments, setData: setAssignments } = usePropState(
    props,
    'assignments',
    [],
  )

  // will add new assignment if not already in
  const pushIfNotExist = (problemId, categoryId) => {
    const assignment = assignments.find(
      (a) => a.problemId === problemId && a.categoryId === categoryId,
    )
    if (!assignment) {
      const newValue = { problemId, categoryId }
      const result = [...assignments, newValue]
      setAssignments(result)
      return result
    }
    return assignments
  }

  // will filter out an assignment
  const filterOut = (problemId, categoryId) => {
    const result = assignments.filter(
      (a) => a.problemId !== problemId || a.categoryId !== categoryId,
    )
    setAssignments(result)
    return result
  }

  // handle when a checkbox is ticked
  const handleValueChange = (isChecked, problemId, categoryId) => {
    if (isChecked) {
      const newAssignments = pushIfNotExist(problemId, categoryId)
      props.onAssignmentsChange(newAssignments)
    } else {
      const newAssignments = filterOut(problemId, categoryId)
      props.onAssignmentsChange(newAssignments)
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
  onAssignmentsChange: PropTypes.func.isRequired,
}
export default AssignmentRow
