import React from 'react'
import {object} from 'prop-types'

const Ratio = ({children}) => <h1>{`its alive ${children}`}</h1>

Ratio.propTypes = {
  children: object,
}

export default Ratio
