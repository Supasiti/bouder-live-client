import { useState } from 'react'
import { PropTypes } from 'prop-types'
import TextInput from '../elements/TextInput'
import Card from '../elements/Card'
import LeftCell from '../elements/LeftCell'
import RoundButton from '../elements/RoundButton'

const defaultProblem = {
  name: '',
}

const ProblemForm = (props) => {
  const { eventId } = props
  const [problem, setProblem] = useState({})
  const [error, setError] = useState(false)

  // handle all the value changes
  const handleValueChange = (key, newValue) => {
    const newProblem = { ...problem, [key]: newValue }
    setProblem(newProblem)
    setError(false)
  }

  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const problemData = { ...problem, eventId }
      const res = await fetch('/api/problems', {
        method: 'POST',
        body: JSON.stringify(problemData),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error('fail to save new problem')
      }
      const newProblem = await res.json()
      props.onSave(newProblem) // this is faster than rerender the whole page
      setProblem(defaultProblem)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Card color="greyLight" extraClasses="flex justify-between items-stretch">
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

ProblemForm.propTypes = {
  eventId: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
}
export default ProblemForm
