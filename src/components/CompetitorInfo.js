import { PropTypes } from 'prop-types'

const CompetitorInfo = (props) => {
  const name = 'name' in props ? props.name : ''
  const competitor = 'competitor' in props ? props.competitor : {}

  return (
    <div className="w-full flex flex-col ">
      <h3
        className="w-full text-center text-yellow-500 text-lg 
        font-bold mb-3"
      >
        {name}
      </h3>
      <div className="flex flex-row ">
        <div className="flex-grow text-left">Number</div>
        <div className="flex-grow text-right">
          {competitor && competitor.number}
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="flex-grow text-left">Status</div>
        <div className="flex-grow text-right">
          {competitor && competitor.status}
        </div>
      </div>
    </div>
  )
}
CompetitorInfo.propTypes = {
  name: PropTypes.string,
  competitor: PropTypes.object,
}
export default CompetitorInfo
