import { useContext, useEffect, useState } from 'react'
import FeedbackContext from './context/FeedbackContext'

function RatingSelect(props) {
  const [selected, setSelected] = useState(10) // Default rating is 10
  const { feedbackEdit } = useContext(FeedbackContext) // Get feedbackEdit state from context

  useEffect(() => {
    setSelected(feedbackEdit.item.rating) // Set selected rating to the current feedback rating when in edit mode
  }, [feedbackEdit]) // Effect to run every time feedbackEdit state changes

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value) // Update selected rating based on user input
    // The '+' operator converts the string value to a number
    props.select(+e.currentTarget.value) // Call the select function passed as a prop with the new rating
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
