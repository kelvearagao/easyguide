import React, {Component} from 'react'
import {string, array, any, arrayOf, shape, func} from 'prop-types'
import {Wrapper, Label, TagsWrapper, Tag} from './elements'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
    }
  }

  checkSelectedValue = value => this.state.value.some(v => v === value)

  toggleValue = item => {
    const {
      state: {value},
      props: {onChange},
    } = this

    // eslint-disable-next-line babel/no-unused-expressions
    this.checkSelectedValue(item.value)
      ? value.splice(value.indexOf(item.value), 1)
      : value.push(item.value)

    this.setState({value}, () => {
      onChange(value)
    })
  }

  render() {
    const {label, items, className} = this.props

    return (
      <Wrapper className={className}>
        {label && <Label>{label}</Label>}
        <TagsWrapper>
          {items.map(item => (
            <Tag
              key={item.value}
              onClick={() => this.toggleValue(item)}
              selected={this.checkSelectedValue(item.value)}
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
