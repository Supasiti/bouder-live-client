import { PropTypes } from 'prop-types'
import AvailableCategoryCard from '../elements/AvailableCategoryCard'

const CompCategoryList = (props) => {
  const categories = 'categories' in props ? props.categories : []

  return (
    <div className="w-full">
      <h2 className="text-yellow-500 text-center text-lg font-bold mb-4">
        Your Categories
      </h2>

      {/* available category list */}
      <div className="space-y-3">
        {categories.map((category) => (
          <AvailableCategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}
CompCategoryList.propTypes = {
  categories: PropTypes.array,
}
export default CompCategoryList
