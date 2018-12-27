import React, { Component, Fragment } from 'react'
import NativeRatio from '../../../../ratio/dist'

const list = [
  { id: 1, name: 'Sim', status: 'inactive' },
  { id: 2, name: 'Não', status: 'active' },
]

class Ratio extends Component { 
  render() {
    return (
      <Fragment>
        <NativeRatio 
          listItems={list}
          getActiveElement={this.getActivatedElement}
        />
      </Fragment>
    )
  }

  getActivatedElement = item => console.log('Activated element', item)
}
export default Ratio
