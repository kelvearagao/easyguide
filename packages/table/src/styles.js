import {css} from 'react-emotion'

export const tableStyle = () => css`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

export const tableHeadStyle = () => css`
  & tr:hover {
    cursor: default;
    box-shadow: none;

    & > td:first-child {
      border-left-color: transparent;
    }

    & > td:last-child {
      border-right-color: transparent;
    }
  }

  & td {
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Rational-Medium';
    font-weight: bold;
    color: #adadad;
  }
`

export const tableRowStyle = () => css`
  height: 30px;
  outline: none;
  vertical-align: middle;
  transition: box-shadow 0.2s linear;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 5px 0 rgba(50, 40, 40, 0.06);

    & > td {
      font-weight: bold;

      &:first-child {
        border-left-color: #d8d8d8;
      }

      &:last-child {
        border-right-color: #d8d8d8;
      }
    }
  }
`

export const tableCellStyle = ({numeric = false}) => css`
  text-align: ${numeric ? 'right' : 'left'};
  padding: 10px 20px;
  color: #322828;
  font-family: 'Rational-Light';
  font-size: 14px;
  border: 1px solid transparent;
  border-bottom: 1px solid #d8d8d8;
`

export const tableCellClipContentStyle = ({minWidth}) =>
  minWidth &&
  css`
    max-width: ${minWidth}px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `

export const arrowStyle = ({direction}) => css`
  display: inline-block;
  vertical-align: top;
  transform: ${direction === 'asc' && 'rotate(180deg)'};
`

export const arrowBoxStyle = () => css`
  display: inline-flex;
  width: 14px;
  margin-left: 7px;
  margin-bottom: 3px;
`
export const noWrapContainerStyle = () => css`
  display: flex;
  flex-wrap: nowrap;
  font-family: 'Rational-Medium';
  font-size: 12px;
`

export const tableSortLabelStyle = ({onClick}) =>
  onClick &&
  css`
    &:hover {
      cursor: pointer;
      color: #322828;
    }
  `
