import { PropTypes } from 'prop-types'
import Card from './Card'
import LeftCell from './LeftCell'
import RoundButton from './RoundButton'

const CategoryCard = (props) => {
  const { name, id } = props

  // when a delete button is clicked
  const handleRemoveCategory = async (e) => {
    e.preventDefault()

    fetch(`/api/categories/${id}`, {
      method: 'DELETE',
    })
    props.onDelete(id)
  }

  return (
    <Card color="grayLight" extraClasses="flex justify-between items-stretch">
      <LeftCell width="w-12">
        <p className="font-bold text-right">{id}</p>
      </LeftCell>
      <div className="w-1/2 flex-grow p-4">{name}</div>
      <div className="w-24 pr-4 flex justify-end items-center">
        <RoundButton type="button" onClick={handleRemoveCategory}>
          <i className="far fa-trash-alt text-xl"></i>
        </RoundButton>
      </div>
    </Card>
  )
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default CategoryCard
