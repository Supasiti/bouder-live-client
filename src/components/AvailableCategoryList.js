import { PropTypes } from 'prop-types'
import AvailableCategoryCard from '../elements/AvailableCategoryCard'

const AvailableCategoryList = (props) => {
  const categories = 'categories' in props ? props.categories : []

  // handle with a category is clicked
  const handleClick = async (categoryId) => {
    const savedString = localStorage.getItem('competitor')
    if (!savedString) return

    const competitor = JSON.parse(savedString)
    const data = { competitorId: competitor.id }

    const res = await fetch(`/api/categories/${categoryId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok && 'onCategoryChanged' in props) {
      props.onCategoryChanged()
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-yellow-500 text-center text-lg font-bold mb-4">
        Available Categories
      </h2>

      {/* available category list */}
      <div className="space-y-3">
        {categories.map((category) => (
          <AvailableCategoryCard
            category={category}
            key={category.id}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}
AvailableCategoryList.propTypes = {
  categories: PropTypes.array,
  onCategoryChanged: PropTypes.func,
}
export default AvailableCategoryList
