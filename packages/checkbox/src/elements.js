import styled, {css} from 'react-emotion'

const selectedTagStyle = ({selected}) =>
  selected &&
  css`
    color: white;
    border-color: transparent;
    background: #3ccbda;
  `

export const Wrapper = styled.section``

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #322828;
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Tag = styled.span`
  cursor: pointer;
  display: inline-block;
  margin: 0 8px;
  padding: 6px 12px;
  border: 1px solid #d8d8d8;
  font-size: 14px;
  color: #322828;
  background-color: #ffffff;
  border-radius: 16px;
  transition: background 120ms linear, color 80ms ease-in;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: white;
    border-color: transparent;
    background: #3ccbda;
  }

  ${selectedTagStyle};
`
