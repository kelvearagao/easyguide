import styled from 'react-emotion'
import {itemStyle, roundedLeft, roundedRight, statusColor} from './styles'

export const Item = styled.button`
  ${itemStyle};
  ${roundedLeft}
  ${roundedRight}
  ${statusColor}
`
