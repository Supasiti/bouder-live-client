import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'
import RoundButton from '../elements/RoundButton'
import api from '../utils/fetch'
import useApi from '../hooks/useApi'

const defaultCategory = {
  name: '',
}

const CategoryForm = (props) => {
  const { eventId } = props
  const [category, setCategory] = useState({})
  const { callApi, error, setError } = useApi(api.createCategory)

  // handle all the value changes
  const handleValueChange = (key, newValue) => {
    const newCategory = { ...category, [key]: newValue }
    setCategory(newCategory)
    setError(false)
  }

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const categoryData = { ...category, eventId }
    const resData = await callApi(categoryData)
    if (resData) {
      props.onSave(resData) // this is faster than rerender the whole page
      setCategory(defaultCategory)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Card
        color="greyLighter"
        shadow={false}
        extraClasses="flex justify-between items-stretch"
      >
        <LeftCell width="w-12" />
        <div className="w-1/2 px-4 py-2 flex-grow">
          <TextInput
            type="text"
            name="name"
            idName="category-name"
            label="name"
            value={category.name}
            placeholder="Category Name"
            onDataChange={handleValueChange}
            isError={!!error}
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
  onSave: PropTypes.func.isRequired,
}
export default CategoryForm
