import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'
import RoundButton from '../elements/RoundButton'
import RightCell from '../elements/RightCell'

const CategoryForm = (props) => {
  const { eventId } = props
  const [category, setCategory] = useState(null)
  const [error, setError] = useState(false)

  // handle all the value changes
  const handleValueChange = (key, newValue) => {
    const newCategory = { ...category, [key]: newValue }
    setCategory(newCategory)
    setError(false)
  }

  console.log(eventId)
  return (
    <Card color="grayLight" extraClasses="flex justify-between items-stretch">
      <LeftCell width="w-12" />
      <div className="w-1/2 px-4 py-2 flex-grow">
        <TextInput
          type="text"
          name="category-name"
          label="name"
          placeholder="Category Name"
          onDataChange={handleValueChange}
          isError={error}
        />
      </div>
      <RightCell width="w-24">
        <RoundButton type="submit">
          <i className="far fa-save text-2xl"></i>
        </RoundButton>
      </RightCell>
    </Card>
  )
}

CategoryForm.propTypes = {
  eventId: PropTypes.string.isRequired,
}
export default CategoryForm
