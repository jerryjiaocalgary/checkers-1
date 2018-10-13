import React from 'react'
import PropTypes from 'prop-types'
import StyledPaper from './styled'
import {getSquareVariant} from './helpers'

/**
 * Visual representation of Board Squares
 * Dark and Light square variants are represented by coordinates x,y
 */
class Square extends React.Component {
  render() {
    const {x, y, size} = this.props

    return (
      <StyledPaper
        variant={getSquareVariant(x, y)}
        data-testid={`board-square-${x}-${y}`}
        size={size}
      />
    )
  }
}

Square.defaultProps = {
  size: 80,
}

Square.propTypes = {
  /**
   * The X coordinate in Board
   */
  x: PropTypes.number.isRequired,

  /**
   * The Y coordinate in Board
   */
  y: PropTypes.number.isRequired,

  /**
   * The size of Square sides
   */
  size: PropTypes.number.isRequired,
}

export default Square
