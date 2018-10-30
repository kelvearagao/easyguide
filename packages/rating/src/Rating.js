import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Star} from '@easyguide/icon'
import {
  RatingWrapper,
  StarWrapper,
  EmptySymbol,
  FullSymbol,
  RatingCaption
} from './elements'

class Rating extends Component {
  state = {
    value: this.props.initialRating
  }

  setRating = (rating) => {
    const {onChange} = this.props

    this.setState({
      value: rating
    }, () => {
      onChange(rating)
    })
  }

  ratingToArray = (number) => {
    return Array
      .from(Array(number).keys())
      .map(number => number + 1)
      .reverse()
  }

  render() {
    const {value} = this.state
    const {className, maxRating, emptySymbol, fullSymbol, ratingCaptions} = this.props
    const ratings = this.ratingToArray(maxRating)

    return (
      <RatingWrapper className={className}>
        {ratings.map(rating => (
          <StarWrapper
            key={rating}
            selected={value >= rating}
            onClick={() => this.setRating(rating)}
          >
            <EmptySymbol>{emptySymbol}</EmptySymbol>
            <FullSymbol>{fullSymbol}</FullSymbol>
            {ratingCaptions[rating] && (
              <RatingCaption>{ratingCaptions[rating]}</RatingCaption>
            )}
          </StarWrapper>
        ))}
      </RatingWrapper>
    )
  }
}

Rating.propTypes = {
  initialRating: PropTypes.number,
  maxRating: PropTypes.number,
  emptySymbol: PropTypes.node,
  fullSymbol: PropTypes.node,
  ratingCaptions: PropTypes.object,
  onChange: PropTypes.func
}

Rating.defaultProps = {
  emptySymbol: <Star color="#CCCCCC" width={40} height={40} />,
  fullSymbol: <Star color="#FFBB00" width={40} height={40} />,
  maxRating: 5,
  ratingCaptions: {},
  onChange: () => null
}

export default Rating
