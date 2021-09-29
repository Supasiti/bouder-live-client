import { PropTypes } from 'prop-types'
import ScoreBox from './ScoreBox'

//  styling
const container = `
  bg-gray-100 flex flex-wrap
  rounded-2xl relative
  lg:border-yellow-500 lg:border-t-2 lg:border-r-2 
  lg:p-2 lg:ml-4 lg:rounded-tl-none lg:rounded-br-none 
  xl:p-3`

const imgContainer = `
  flex flex-grow items-end
  lg:absolute lg:z-10 lg:-top-5 lg:-left-10`
const imgBorder = `
  h-full flex-grow
  lg:w-20 lg:h-20 lg:rounded-full lg:p-0.5
  lg:border-yellow-500 lg:border-2`
const imgRound = `
  w-full h-full bg-gray-400 rounded-tl-2xl rounded-bl-2xl
  lg:rounded-full lg:shadow-xl`

const scoreContainer = `
flex flex-col items-start p-3 pl-10
  lg:w-full lg:p-0 lg:pl-12 xl:items-end
`
const competitorTitle = `
  text-left w-full text-yellow-500 font-bold mb-2
  xl:hidden`
const hiddenCompetitorTitle = `
  hidden xl:inline-block text-yellow-500 font-bold text-lg`

const abbrevs = {
  tops: 'T',
  bonuses: 'B',
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

//  rendering
const ScoreCard = (props) => {
  const score = 'score' in props ? props.score : {}
  const entries = getEntries(score)

  return (
    <div className={container}>
      {/* image */}
      <div className={imgContainer}>
        <div className={imgBorder}>
          <div className={imgRound}></div>
        </div>

        <p className={hiddenCompetitorTitle}>
          {score.competitor.user.username}
        </p>
      </div>

      {/* scores */}
      <div className={scoreContainer}>
        <p className={competitorTitle}>{score.competitor.user.username}</p>

        <div className="flex justify-end space-x-1 ">
          {entries.map((entry) => (
            <ScoreBox
              key={Math.floor(Math.random() * 100000001)}
              size={6}
              extend="md:w-8 md:h-8"
              entry={entry}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

ScoreCard.propTypes = {
  score: PropTypes.object,
}

export default ScoreCard
