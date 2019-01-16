import React, { Component } from 'react'
import { string, array, any, arrayOf, shape, func } from 'prop-types'
import { Wrapper, Label, TagsWrapper, Tag } from './elements'


class Checkbox extends Component {
  state = {
    list: this.props.items  
  }

  handleChange = item => {
    const newList = this.state.list.map(listItem => {
      if(item.value === listItem.value){
        return { ...listItem, isActive: !item.isActive }
      } 
      return listItem
    })

    this.props.onChange(newList)
    this.setState({ list: newList })
  }

  render() {
    const { label, className } = this.props

    return (
      <Wrapper className={className}>
        {label && <Label>{label}</Label>}
        <TagsWrapper>
          {this.state.list.map(item => (
            <Tag
              key={item.value}
              onClick={() => this.handleChange(item)}
              selected={item.isActive}
            >
              {item.label}
            </Tag>
          ))}
        </TagsWrapper>
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
  label: string,
  value: array,
  className: string,
  onChange: func,
  items: arrayOf(
    shape({
      value: any.isRequired,
      label: string.isRequired,
    }),
  ),
}

Checkbox.defaultProps = {
  label: '',
  value: [],
  items: [],
  onChange: () => null,
}

export default Checkbox
