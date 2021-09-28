import { PropTypes } from 'prop-types'
import RoundButton from '../elements/RoundButton'
import useApi from '../hooks/useApi'
import usePropState from '../hooks/usePropState'
import api from '../utils/fetch'
import AssignmentRow from './AssignmentRow'

const AssignmentGrid = (props) => {
  const { eventId } = props
  const { data: problems } = usePropState(props, 'problems', [])
  const { data: categories } = usePropState(props, 'categories', [])
  const { data: assignments, setData: setAssignments } = usePropState(
    props,
    'assignments',
    [],
  )
  const { callApi } = useApi(api.assignProblems)

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    props.onUpdate('assignments', assignments)
    const newData = { eventId, assignments }
    await callApi(newData)
  }

  // update when assignment values changes
  const handleAssignmentsChange = (newAssignments) => {
    setAssignments(newAssignments)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        {/* header */}
        <div className="flex justify-center space-x-1 mb-1">
          <div className="w-32 h-32 flex justify-center items-center">
            <RoundButton type="submit">
              <i className="far fa-save text-xl"></i>
            </RoundButton>
          </div>
          {categories &&
            categories.map((c) => (
              <div
                className="w-8 h-32 rounded-md bg-gray-300 relative"
                key={c.id}
              >
                <p
                  className="absolute -bottom-3 left-1 
                    -rotate-90 transform origin-top-left "
                >
                  {c.name}
                </p>
              </div>
            ))}
        </div>

        {/* body */}
        <div className="flex flex-col items-center space-y-1">
          {problems &&
            problems.map((p) => (
              <AssignmentRow
                key={p.id}
                problem={p}
                categories={categories}
                assignments={assignments}
                onAssignmentsChange={handleAssignmentsChange}
              />
            ))}
        </div>
      </div>
    </form>
  )
}
AssignmentGrid.propTypes = {
  eventId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
}
export default AssignmentGrid
