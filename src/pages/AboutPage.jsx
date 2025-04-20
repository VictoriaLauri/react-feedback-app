import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a React app for collecting feedback from users.</p>
      <p>Version 1.0.0</p>
      <p>
        Created by:{' '}
        <a
          href='https://www.linkedin.com/in/victorialauri/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Victoria Lauri
        </a>
      </p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
