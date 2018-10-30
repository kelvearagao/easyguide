import React, {Component} from 'react'
import styled, {css} from 'react-emotion'
import Rating from '@easyguide/rating/dist'

const wrapperStyle = () => css`
  float: left;
  width: auto;
`

const Wrapper = styled('div')`
  ${wrapperStyle};
`

const ratingCaptions = {
  1: 'Muito Ruim',
  2: 'Ruim',
  3: 'Regular',
  4: 'Bom',
  5: 'Ótimo'
}

class Example extends Component {
  render() {
    return (
      <Wrapper>
        <Rating
          initialRating={3}
          ratingCaptions={ratingCaptions}
          onChange={value => console.log(value)}
        />
      </Wrapper>
    )
  }
}

export default Example
