import React from 'react'
import Stepper from '@easyguide/stepper'
import withStep from '@easyguide/stepper/dist/withStep'

const ActiveStepper = () => (
  <Stepper activeStep="STEP_TWO">
    <Step stepName="STEP_ONE" />
    <Step stepName="STEP_TWO" />
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

export default ActiveStepper
