import { PropTypes } from 'prop-types'
import { useState } from 'react'
import api from '../utils/fetch'
import Card from './Card'
import RoundButton from './RoundButton'
import ScoreBox from './ScoreBox'

const defaultScore = {
  top: false,
  bonus: false,
  attemptTop: 0,
  attemptBonus: 0,
  attempts: 0,
  problem: { name: '' },
}

const CompetitorScoreRow = (props) => {
  const [showBtn, setShowBtn] = useState(false)
  const [addBtnText, setBtnText] = useState(true)
  const score = 'score' in props ? props.score : defaultScore
  const colorTop = score.top ? 'bg-gray-400' : ''
  const colorBonus = score.bonus ? 'bg-gray-400' : ''
  const showString = showBtn ? '' : 'hidden'

  // when add button is pressed
  const handleAdd = async (e, str) => {
    e.preventDefault()

    const res = await api.addToScore(score.id, str)
    if (res.ok && 'onScoreChanged' in props) {
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

  // console.log(score.problem)

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
            <div className="w-8 text-center">T</div>
            <div className="w-8 text-center">B</div>
            <div className="w-8 text-center">AT</div>
            <div className="w-8 text-center">AB</div>
            <div className="w-8 text-center">A</div>
          </div>
          <div className="flex space-x-1">
            <ScoreBox color={colorTop}>
              {score.top && (
                <span
                  className="flex-grow text-center text-gray-100 
                fas fa-check text-lg"
                ></span>
              )}
            </ScoreBox>
            <ScoreBox color={colorBonus}>
              {score.bonus && (
                <span
                  className="flex-grow text-center text-gray-100 
                fas fa-check text-lg"
                ></span>
              )}
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attemptTop}</p>
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attemptBonus}</p>
            </ScoreBox>
            <ScoreBox>
              <p className="text-center">{score.attempts}</p>
            </ScoreBox>
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
