import { PropTypes } from 'prop-types'
import Card from './Card'
import LeftCell from './LeftCell'

const CategoryCard = (props) => {
  const { name, id } = props

  return (
    <Card color="grayLight" extraClasses="flex justify-between items-stretch">
      <LeftCell width="w-12">
        <p className="font-bold text-right">{id}</p>
      </LeftCell>
      <div className="w-1/2 flex-grow p-4">{name}</div>
      <div className="w-24 p-4">{/* to put delete button here */}</div>
    </Card>
  )
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
export default CategoryCard
