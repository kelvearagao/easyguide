import React from 'react'
import Stepper from '@easyguide/stepper'
import withStep from '@easyguide/stepper/dist/withStep'

const SimpleStepper = () => (
  <Stepper>
    <Step stepName="step 1" />
    <Step stepName="step 2" />
  </Stepper>
)

const Step = withStep(({ previous, next, activeStep }) => (
  <section>
    <h1>{activeStep}</h1>
    <p>description</p>
    <button onClick={previous}>previous</button>
    <button onClick={next}>next</button>
  </section>
))

export default SimpleStepper
