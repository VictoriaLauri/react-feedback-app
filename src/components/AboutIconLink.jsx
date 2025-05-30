import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} color='white' className='about-link' />
      </Link>
    </div>
  )
}

export default AboutIconLink
