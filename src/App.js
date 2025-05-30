import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './components/context/FeedbackContext'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
