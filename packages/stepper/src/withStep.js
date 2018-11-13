import React from 'react'
import PropTypes from 'prop-types'
import Stepper from './Stepper'

const withStep = Component => {
  const Step = props => (
    <Stepper.Consumer>
      {contextProps => <Component {...contextProps} {...props} />}
    </Stepper.Consumer>
  )

  Step.propTypes = {
    stepName: PropTypes.string.isRequired
  }

  return Step
}

export default withStep
