import { PropTypes } from 'prop-types'
import { useState } from 'react'
import api from '../utils/fetch'
import Card from './Card'
import RoundButton from './RoundButton'
import ScoreBox from './ScoreBox'
import useApi from '../hooks/useApi'

const defaultScore = {
  top: false,
  bonus: false,
  attemptTop: 0,
  attemptBonus: 0,
  attempts: 0,
  problem: { name: '' },
}

const abbrevs = {
  top: 'T',
  bonus: 'B',
  attemptTop: 'AT',
  attemptBonus: 'AB',
  attempts: 'A',
}

const getEntries = (score) => {
  const entries = Object.entries(abbrevs)
  const result = entries.reduce((acc, entry) => {
    const [key, abbrev] = entry
    const value = key in score ? score[key] : 0
    return [...acc, { abbrev, value }]
  }, [])
  return result
}

// rendering
const CompetitorScoreRow = (props) => {
  const [showBtn, setShowBtn] = useState(false)
  const [addBtnText, setBtnText] = useState(true)
  const { callApi } = useApi(api.addToScore)

  const score = 'score' in props ? props.score : defaultScore
  const entries = getEntries(score)
  const showString = showBtn ? '' : 'hidden'

  // when add button is pressed
  const handleAdd = async (e, key) => {
    e.preventDefault()

    const data = { scoreId: score.id, key }
    const res = await callApi(data)
    if (res && 'onScoreChanged' in props) {
      props.onScoreChanged()
    }
  }

  const handleShowButton = (e) => {
    e.preventDefault()
    if (!showBtn) {
      setShowBtn(true)
      setBtnText(false)
    } else {
      setShowBtn(false)
      setBtnText(true)
    }
  }

  return (
    <Card color="greyLighter" shadow={false} extraClasses="p-3">
      <div className="grid grid-cols-6 gap-2">
        {/* problem name */}
        <div className="flex items-center col-span-4 sm:col-span-1">
          <p className="text-left text-yellow-500">{score.problem.name}</p>
        </div>

        {/* Scores */}
        <div className="flex flex-col items-center col-span-6 sm:col-span-3">
          <div className="flex space-x-1">
            {entries.map((entry) => (
              <ScoreBox
                key={Math.floor(Math.random() * 100000001)}
                entry={entry}
              />
            ))}
          </div>
        </div>

        {/* add scores */}

        <div className="hidden sm:flex items-center justify-end space-x-1 col-span-2">
          <RoundButton onClick={(e) => handleAdd(e, 'top')}>+T</RoundButton>
          <RoundButton onClick={(e) => handleAdd(e, 'bonus')}>+B</RoundButton>
          <RoundButton onClick={(e) => handleAdd(e, 'attempt')}>+A</RoundButton>
        </div>

        <div
          className="absolute sm:hidden -top-1 -right-1 flex items-center justify-end space-x-1
          row-start-1 col-start-5 col-span-2"
        >
          {/* open add to score buttons */}
          <RoundButton onClick={handleShowButton}>
            {(addBtnText && <i className="fas fa-plus"></i>) || (
              <i className="fas fa-times"></i>
            )}
          </RoundButton>

          {/* hidden buttons */}
          <div className={`space-x-2 ${showString}`}>
            <button
              type="button"
              className="btn btn-primary text-xs px-3 py-2"
              onClick={(e) => handleAdd(e, 'top')}
            >
              Top
            </button>
            <button
              type="button"
              className="btn btn-primary text-xs px-3 py-2"
              onClick={(e) => handleAdd(e, 'bonus')}
            >
              Bonus
            </button>
            <button
              type="button"
              className="btn btn-primary text-xs px-3 py-2"
              onClick={(e) => handleAdd(e, 'attempt')}
            >
              Attempt
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
CompetitorScoreRow.propTypes = {
  score: PropTypes.object,
  onScoreChanged: PropTypes.func,
}

export default CompetitorScoreRow
