import { FaEdit, FaTimes } from 'react-icons/fa'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import Card from './shared/Card'

function FeedbackItem(props) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{props.item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(props.item.id)}>
        <FaTimes color='rebeccapurple' />
      </button>
      <button onClick = {() => editFeedback(props.item)} className='edit'>
        <FaEdit color='rebeccapurple' />
      </button>
      <div className='text-display'>{props.item.text}</div>
    </Card>
  )
}
// no need for default props as we are using context API to get the feedback data
// FeedbackItem.propTypes = {
//   item: PropTypes.object.isRequired,
// }

export default FeedbackItem
