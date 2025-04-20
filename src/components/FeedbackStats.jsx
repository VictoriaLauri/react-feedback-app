// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // Calculate average rating
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedback.length
  // show only 1 decimal and if ends with .0, remove it with use of regex
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
// no need for default props as we are using context API to get the feedback data
// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
