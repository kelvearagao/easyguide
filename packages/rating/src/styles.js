import {css} from 'react-emotion'
import {FullSymbol, RatingCaption} from './elements'

export const baseSymbolStyle = () => css`
  cursor: pointer;
`

export const ratingWrapperStyle = () => css`
  display: flex;
  flex-direction: row-reverse;
`

export const fullSymbolStyle = () => css`
  ${baseSymbolStyle};
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
`

export const emptySymbolStyle = () => css`
  ${baseSymbolStyle};
`

export const ratingSelectedStyle = ({selected}) => selected && css`
  & > ${FullSymbol},
  & ~ & > ${FullSymbol} {
    overflow: visible;
  }
`

export const starWrapperStyle = () => css`
  position: relative;
  margin: 0 10px;

  &:hover > ${FullSymbol},
  &:hover ~ & > ${FullSymbol} {
    overflow: visible;
  }

  &:hover ${RatingCaption} {
    visibility: visible;
    opacity: 1;
  }
`

export const ratingCaptionStyle = () => css`
  position: absolute;
  left: 20px;
  bottom: -22px;
  padding: 5px 8px;
  white-space: nowrap;
  font-size: 12px;
  text-align: center; 
  color: white;
  opacity: 0;
  visibility: hidden;
  background: #322828;
  border-radius: 3px;
  transition: opacity 100ms ease-in-out;
`
