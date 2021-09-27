import { PropTypes } from 'prop-types'

const AvailableCategoryCard = (props) => {
  const { category } = props

  const handleClick = (e) => {
    e.preventDefault()
    if ('onClick' in props) {
      props.onClick(category.id)
    }
  }
  return (
    <div
      className="w-full p-2 rounded-md hover:bg-gray-100 "
      onClick={handleClick}
      onKeyUp={handleClick}
      role="button"
      tabIndex={0}
    >
      <p className="text-lg">{category.name}</p>
    </div>
  )
}
AvailableCategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}
export default AvailableCategoryCard
