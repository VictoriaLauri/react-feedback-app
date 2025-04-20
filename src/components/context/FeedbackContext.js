import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    //using proxy in package.json to avoid CORS issues
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback), // Convert the new feedback object to a JSON string
    })

    const data = await response.json() // Parse the response data as JSON

    setFeedback([data, ...feedback]) // Add the new feedback to the beginning of the feedback array by copying the existing feedback array and adding the new feedback object
  }

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
    const data = await response.json()

    setFeedback(feedback.map((item) => (item.id === id ? data : item))) // Update the feedback state with the updated feedback item

    setFeedbackEdit({
      item: {},
      edit: false,
    })
    // Reset feedbackEdit state to initial values after updating feedback
    // This is important to clear the form after editing
  }

  return (
    <FeedbackContext.Provider
      value={{
        //state with feedback data
        feedback,
        //state for edit feedback
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
