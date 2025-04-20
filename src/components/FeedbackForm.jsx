import { useContext, useEffect, useState } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true) // Disable button by default
  const [message, setMessage] = useState('') // Message to show when text is too short
  const [rating, setRating] = useState(10) // Default rating
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext) // Get addFeedback function from context

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false) // Enable button when in edit mode
      setText(feedbackEdit.item.text) // Set text to the current feedback text
      setRating(feedbackEdit.item.rating) // Set rating to the current feedback rating
    }
  }, [feedbackEdit]) // Effect to run every time feedbackEdit state changes

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true) // Disable button if text is empty
      setMessage(null) // Clear message if text is empty
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true) // Disable button if text is less than 10 characters
      setMessage('Text must be at least 10 characters') // Show message if text is too short
    } else {
      setBtnDisabled(false) // Enable button if text is valid
      setMessage(null) // Clear message if text is valid
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    // Prevent default submit to actual file
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback) // Update feedback if in edit mode
      } else {
        addFeedback(newFeedback) // Add new feedback if not in edit mode
      }
      setText('') // Clear the text input after submission
      setRating(10) // Reset rating to default value
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            value={text}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
