import React from 'react'
import Stepper from './Stepper'

const withStep = Component => {
  const Step = props => (
    <Stepper.Consumer>
      {contextProps => <Component {...contextProps} {...props} />}
    </Stepper.Consumer>
  )

  return Step
}

export default withStep
