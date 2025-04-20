import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && "reverse"}`}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    // div prop is considered a node in React
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card