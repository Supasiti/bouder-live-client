import usePropState from '../hooks/usePropState'
import AssignmentRow from './AssignmentRow'

const AssignmentGrid = (props) => {
  const { data: categories } = usePropState(props, 'categories', [])
  const { data: problems } = usePropState(props, 'problems', [])
  const { data: assignments } = usePropState(props, 'assignments', [])

  // console.log(problems)
  // console.log(categories)
  console.log(assignments)

  return (
    <form>
      <div className="">
        {/* header */}
        <div className="flex justify-center space-x-1 mb-1">
          <div className="w-32 h-32"></div>
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
              />
            ))}
        </div>
      </div>
    </form>
  )
}

export default AssignmentGrid
