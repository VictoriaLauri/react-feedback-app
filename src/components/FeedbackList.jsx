// import PropTypes from "prop-types"
import FeedbackItem from "./FeedbackItem"
import {useContext} from "react"
import FeedbackContext from "./context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext) 
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
  <div className = "feedback-list">
    {feedback.map((item) => (
      <FeedbackItem key={item.id} item={item}/>
    ))}
  </div>
  )
}

// no need for default props as we are using context API to get the feedback data
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// }

export default FeedbackList