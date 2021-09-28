import { PropTypes } from 'prop-types'
import AvailableCategoryCard from '../elements/AvailableCategoryCard'
import useApi from '../hooks/useApi'
import useLocalStorage from '../hooks/useLocalStorage'
import api from '../utils/fetch'

const AvailableCategoryList = (props) => {
  const { data: competitor } = useLocalStorage('competitor', {})
  const { callApi } = useApi(api.joinCategory)
  const categories = 'categories' in props ? props.categories : []

  // handle with a category is clicked
  const handleClick = async (categoryId) => {
    const data = { categoryId, competitorId: competitor.id }
    const resData = await callApi(data)
    if (resData && 'onCategoryChanged' in props) {
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
