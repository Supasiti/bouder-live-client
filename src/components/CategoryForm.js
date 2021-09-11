import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'
import RoundButton from '../elements/RoundButton'

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

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const categoryData = { ...category, eventId }
      const res = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify(categoryData),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error('fail to save new category')
      }
      window.location.reload()
    } catch (err) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Card color="grayLight" extraClasses="flex justify-between items-stretch">
        <LeftCell width="w-12" />
        <div className="w-1/2 px-4 py-2 flex-grow">
          <TextInput
            type="text"
            name="name"
            idName="category-name"
            label="name"
            placeholder="Category Name"
            onDataChange={handleValueChange}
            isError={error}
          />
        </div>
        <div className="w-24 pr-4 flex flex-col justify-center items-end">
          <RoundButton type="submit">
            <i className="far fa-save text-xl"></i>
          </RoundButton>
        </div>
      </Card>
    </form>
  )
}

CategoryForm.propTypes = {
  eventId: PropTypes.string.isRequired,
}
export default CategoryForm
