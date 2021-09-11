import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'

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
          name="name"
          placeholder="Category Name"
          onDataChange={handleValueChange}
          isError={error}
        />
      </div>
      <div className="w-24 flex">{/* to put delete button here */}</div>
    </Card>
  )
}

CategoryForm.propTypes = {
  eventId: PropTypes.string.isRequired,
}
export default CategoryForm
