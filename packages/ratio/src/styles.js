import {css} from 'react-emotion'

const COLORS_STATUS = {
  active: {
    bgColor: '#3CCBDA',
    fontColor: '#fff',
  },
  inactive: {
    bgColor: '#fff',
    fontColor: '#3CCBDA',
  },
}

export const statusColor = ({status}) =>
  status &&
  css`
    background-color: ${COLORS_STATUS[status].bgColor};
    color: ${COLORS_STATUS[status].fontColor};
  `

export const itemStyle = () => css`
  display: inline-block;
  height: 32px;
  width: auto;
  min-width: 55px;
  padding: 0 20px;
  line-height: 32px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #3ccbda;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const roundedLeft = ({first}) =>
  first &&
  css`
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  `

export const roundedRight = ({last}) =>
  last &&
  css`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `
