import styled from 'react-emotion'
import {
  inputBaseStyle,
  inputStyle,
  inputWrapperStyle,
  selectWrapperStyle,
  dropdownStyle,
  dropdownItemStyle,
  emptyListStyle,
  arrowStyle,
  arrowOpenStyle,
  withLinkStyle,
  dropdownWrapperStyle,
  customSelectStyle
} from './styles'

export const InputWrapper = styled.div`
  ${inputBaseStyle};
  ${inputWrapperStyle};
`

export const InputField = styled.input`
  ${inputStyle};
`

export const Arrow = styled.span`
  ${arrowStyle};
  ${arrowOpenStyle};
`

export const SelectWrapper = styled.div`
  ${selectWrapperStyle};
`

export const Dropdown = styled.ul`
  ${dropdownStyle};
`

export const DropdownWrapper = styled.div`
  ${dropdownWrapperStyle};
`

export const DropdownItem = styled.li`
  ${dropdownItemStyle};
`

export const EmptyList = styled.div`
  ${emptyListStyle};
`

export const CustomItemWrapper = styled.li`
  ${withLinkStyle};
`

export const CustomSelectValue = styled.span`
  ${customSelectStyle};
`
