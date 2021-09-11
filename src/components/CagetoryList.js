import { PropTypes } from 'prop-types'
import useUpdateState from '../hooks/useUpdateState'
import CategoryCard from '../elements/CategoryCard'
import CategoryForm from './CategoryForm'

const CategoryList = (props) => {
  const { eventId } = props
  const { data: categories } = useUpdateState(props, 'categories', [])

  return (
    <div>
      <h3 className="text-lg text-center font-bold mb-4">Event Categories</h3>
      <div className="space-y-3 mb-3">
        {categories &&
          categories.map((c) => (
            <CategoryCard id={c.id} key={c.id} name={c.name} />
          ))}
      </div>

      <CategoryForm eventId={eventId} />
    </div>
  )
}
CategoryList.propTypes = {
  eventId: PropTypes.string.isRequired,
}
export default CategoryList
