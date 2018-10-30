import styled from 'react-emotion'
import {
  ratingWrapperStyle,
  fullSymbolStyle,
  emptySymbolStyle,
  starWrapperStyle,
  ratingSelectedStyle,
  ratingCaptionStyle
} from './styles'

export const RatingWrapper = styled.div`
  ${ratingWrapperStyle};
`

export const FullSymbol = styled.div`
  ${fullSymbolStyle};
`

export const EmptySymbol = styled.div`
  ${emptySymbolStyle};
`

export const RatingCaption = styled.div`
  ${ratingCaptionStyle};
`

export const StarWrapper = styled.div`
  ${starWrapperStyle};
  ${ratingSelectedStyle};
`
