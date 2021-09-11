import { PropTypes } from 'prop-types'
import useUpdateState from '../hooks/useUpdateState'
import CategoryCard from '../elements/CategoryCard'
import CategoryForm from './CategoryForm'

const CategoryList = (props) => {
  const { eventId } = props
  const { data: categories, setData: setCategories } = useUpdateState(
    props,
    'categories',
    [],
  )

  // handle when a category is deleted
  const handleDelete = (categoryId) => {
    const newCategories = categories.filter((c) => c.id !== categoryId)
    setCategories(newCategories)
  }

  // handle when a category is added
  const handleSave = (newCategory) => {
    const newCategories = [...categories, newCategory]
    setCategories(newCategories)
  }

  return (
    <div>
      <h3 className="text-lg text-center font-bold mb-4">Event Categories</h3>
      <div className="space-y-3 mb-3">
        {categories &&
          categories.map((c) => (
            <CategoryCard
              id={c.id}
              key={c.id}
              name={c.name}
              onDelete={handleDelete}
            />
          ))}
      </div>

      <CategoryForm eventId={eventId} onSave={handleSave} />
    </div>
  )
}
CategoryList.propTypes = {
  eventId: PropTypes.string.isRequired,
}
export default CategoryList
