import { PropTypes } from 'prop-types'

import Card from './Card'
import LeftCell from './LeftCell'
import RoundButton from './RoundButton'
import api from '../utils/fetch'
import useApi from '../hooks/useApi'

// styling
const cardStyle = {
  color: 'greyLighter',
  shadow: false,
  extraClasses: 'flex justify-between items-stretch',
}

// rendering
const CategoryCard = (props) => {
  const { name, id, index } = props
  const { callApi } = useApi(api.deleteCategory)

  // when a delete button is clicked
  const handleRemoveCategory = async (e) => {
    e.preventDefault()

    const res = await callApi(id)
    if (res) props.onDelete(id)
  }

  return (
    <Card {...cardStyle}>
      <LeftCell width="w-12">
        <p className="font-bold text-right">{index}</p>
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
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default CategoryCard
