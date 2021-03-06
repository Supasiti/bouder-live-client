import { PropTypes } from 'prop-types'
import usePropState from '../hooks/usePropState'
import CategoryCard from '../elements/CategoryCard'
import CategoryForm from './CategoryForm'

const CategoryList = (props) => {
  const { eventId } = props
  const { data: categories, setData: setCategories } = usePropState(
    props,
    'categories',
    [],
  )

  // handle when a category is deleted
  const handleDelete = (categoryId) => {
    const newCategories = categories.filter((c) => c.id !== categoryId)
    setCategories(newCategories)
    props.onUpdate('categories', newCategories)
  }

  // handle when a category is added
  const handleSave = (newCategory) => {
    const newCategories = [...categories, newCategory]
    setCategories(newCategories)
    props.onUpdate('categories', newCategories)
  }

  return (
    <div>
      <h3 className="text-lg text-center font-bold mb-4">Event Categories</h3>
      <div className="space-y-3 mb-3">
        {categories &&
          categories.map((c, index) => (
            <CategoryCard
              index={index + 1}
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
  onUpdate: PropTypes.func.isRequired,
}
export default CategoryList
