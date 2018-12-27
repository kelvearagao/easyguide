/* eslint-disable react/no-access-state-in-setstate */
import React, {Component, Fragment} from 'react'
import {arrayOf, shape, func, number, string, bool} from 'prop-types'
import isEqual from 'lodash.isequal'
import {Item} from './element'

const mapStatus = {
  active: 'active',
  inactive: 'inactive',
  disabled: 'disabled',
}

const getStatusProperty = status => mapStatus[status] || mapStatus.inactive

class Ratio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: props.listItems.map(item => ({
        ...item,
        status: getStatusProperty(item.status),
      })),
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !isEqual(nextProps.listItems, nextState.listItems) ||
      !isEqual(nextState.listItems, this.state.listItems)
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.listItems.map((item, i, list) => (
          <Item
            key={item.id}
            status={item.status}
            first={i === 0}
            last={list.length - 1 === i}
            onClick={() => this.changeList(item)}
          >
            {item.name}
          </Item>
        ))}
      </Fragment>
    )
  }

  changeList = clickedItem => {
    let newList = [...this.state.listItems]

    newList = newList.map(item =>
      item.status === clickedItem.status
        ? {...item, status: mapStatus.active}
        : {...item, status: mapStatus.inactive},
    )

    this.setState(
      {listItems: newList},
      this.props.getActiveElement(clickedItem.id),
    )
  }
}

Ratio.propTypes = {
  listItems: arrayOf(
    shape({
      name: string.isRequired,
      id: number.isRequired,
      status: bool,
    }),
  ).isRequired,
  getActiveElement: func.isRequired,
}

export default Ratio
