import React from 'react'
import Stepper from '@easyguide/stepper'
import withStep from '@easyguide/stepper/dist/withStep'

const ActiveStepper = () => (
  <Stepper>
    <NestedStep stepName="OUTER_ONE" />
    <Step stepName="OUTER_TWO" />
  </Stepper>
)

const NestedStep = withStep(({ next, activeStep }) => (
  <section>
    <h1>{activeStep}</h1>
    <Stepper finishCallback={next}>
      <Step stepName="NESTED_ONE" />
      <Step stepName="NESTED_TWO" />
    </Stepper>
  </section>
))

const Step = withStep(({ previous, next, activeStep }) => (
  <section>
    <h1>{activeStep}</h1>
    <p>description</p>
    <button onClick={previous}>previous</button>
    <button onClick={next}>next</button>
  </section>
))

export default ActiveStepper
