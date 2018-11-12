import React, { Component } from 'react'
import PropTypes from 'prop-types'

const StepperContext = React.createContext({
  activeStep: 0
})

class Stepper extends Component {
  static Consumer = StepperContext.Consumer

  findStepIndex = step => {
    if (!step) {
      return 0
    }

    return this.steps.findIndex(x => x === step)
  }

  previous = () => {
    const currentStep = this.findStepIndex(this.state.activeStep)
    if (currentStep === 0) {
      return
    }

    this.setState({
      activeStep: this.steps[currentStep - 1]
    })
  }

  next = () => {
    const { finishCallback } = this.props
    const currentStep = this.findStepIndex(this.state.activeStep)

    if (currentStep === this.steps.length - 1) {
      finishCallback()
      return
    }

    this.setState({
      activeStep: this.steps[currentStep + 1]
    })
  }

  goTo = step => {
    const targetStep = this.findStepIndex(step)
    if (targetStep !== -1) {
      this.setState({
        activeStep: this.steps[targetStep]
      })
    }
  }

  constructor(props) {
    super(props)
    this.steps = []

    React.Children.map(this.props.children, (child, index) => {
      const stepName = child.props.stepName ? child.props.stepName : index
      this.steps.push(stepName)
    })

    this.state = {
      activeStep: this.steps[props.activeStep] || props.activeStep
    }
  }

  render() {
    const { activeStep } = this.state
    const { finishCallback } = this.props
    const children = React.Children.toArray(this.props.children)
    const extraProps = {
      activeStep,
      previous: this.previous,
      next: this.next,
      goTo: this.goTo,
      finishCallback
    }

    const [child = null] = children.filter(({ props: { stepName } }, index) => {
      const currentStep = activeStep || this.steps[activeStep]
      return currentStep === stepName || currentStep === index
    })

    return (
      <StepperContext.Provider value={extraProps}>
        {child}
      </StepperContext.Provider>
    )
  }
}

Stepper.propTypes = {
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  finishCallback: PropTypes.func,
  children: PropTypes.node
}

Stepper.defaultProps = {
  activeStep: 0,
  finishCallback: () => {}
}

export default Stepper
