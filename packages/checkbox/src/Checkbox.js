import React, { Component } from 'react'
import { string, array, any, arrayOf, shape, func } from 'prop-types'
import isEqual from 'lodash.isequal'
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
      return { ...listItem }
    })

    this.setState(
      { list: newList },
      this.props.onChange(newList)
    )
  }

  componentDidUpdate() {
    if(!isEqual(this.props.items, this.state.list)){
      this.setState({ list: this.props.items })  
    }
  }

  render() {
    const { label, className, disabled } = this.props
    console.log('test')
    return (
      <Wrapper className={className}>
        {label && <Label>{label}</Label>}
        <TagsWrapper>
          {this.state.list.map(item => (
            <Tag
              key={item.value}
              onClick={() => !disabled && this.handleChange(item)}
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
