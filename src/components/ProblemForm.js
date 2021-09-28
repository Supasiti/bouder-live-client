import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'
import RoundButton from '../elements/RoundButton'
import api from '../utils/fetch'
import useApi from '../hooks/useApi'

const defaultProblem = {
  name: '',
}

const ProblemForm = (props) => {
  const { eventId } = props
  const [problem, setProblem] = useState({})
  // const [error, setError] = useState(false)
  const { callApi, error, setError } = useApi(api.createProblem)

  // handle all the value changes
  const handleValueChange = (key, newValue) => {
    const newProblem = { ...problem, [key]: newValue }
    setProblem(newProblem)
    setError('')
  }

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const problemData = { ...problem, eventId }
    const newProblem = await callApi(problemData)
    if (newProblem) {
      props.onSave(newProblem) // this is faster than rerender the whole page
      setProblem(defaultProblem) // clear form
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
            idName="problem-name"
            label="name"
            value={problem.name}
            placeholder="Problem Name"
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

ProblemForm.propTypes = {
  eventId: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
}
export default ProblemForm
