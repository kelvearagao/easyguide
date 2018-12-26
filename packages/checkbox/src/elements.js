import styled from 'react-emotion'
import {
  labelBaseStyle,
  tagsWrapperBaseStyle,
  tagBaseStyle,
  tagSelectedStyle,
} from './styles'

export const Wrapper = styled.section``

export const Label = styled.span`
  ${labelBaseStyle};
`

export const TagsWrapper = styled.div`
  ${tagsWrapperBaseStyle};
`

export const Tag = styled.span`
  ${tagBaseStyle};
  ${tagSelectedStyle};
`
