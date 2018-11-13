import React, { Component } from 'react'
import { createMemoryHistory } from 'history'
import PropTypes from 'prop-types'

const StepperContext = React.createContext()

class Stepper extends Component {
  static Consumer = StepperContext.Consumer

  get previousStep() {
    return this.steps[this.steps.indexOf(this.state.activeStep) - 1]
  }

  get nextStep() {
    return this.steps[this.steps.indexOf(this.state.activeStep) + 1]
  }

  previous = () => {
    if (this.previousStep) {
      this.history.push(this.stepToPath(this.previousStep))
    }
  }

  next = () => {
    const { finishCallback } = this.props

    if (!this.nextStep) {
      finishCallback()
      return
    }

    this.history.push(this.stepToPath(this.nextStep))
  }

  stepToPath = stepName => `${this.props.basename}/${stepName}`

  pathToStep = pathname => {
    const pathStep = pathname.replace(`${this.props.basename}/`, '')
    const [step] = this.steps.filter(stepName => stepName === pathStep)
    return step || this.state.step
  }

  constructor(props) {
    super(props)
    this.steps = []

    React.Children.forEach(this.props.children, child => {
      this.steps.push(child.props.stepName)
    })

    this.state = {
      activeStep: this.props.activeStep || this.steps[0]
    }

    this.history = props.history || createMemoryHistory()
    this.history.replace(this.stepToPath(this.state.activeStep))
    this.unlisten = this.history.listen(({ pathname }) => {
      this.setState({ activeStep: this.pathToStep(pathname) })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const { activeStep } = this.state
    const { finishCallback } = this.props
    const children = React.Children.toArray(this.props.children)
    const extraProps = {
      activeStep,
      previous: this.previous,
      steps: this.steps,
      next: this.next,
      history: this.history,
      finishCallback
    }

    const [child = null] = children.filter(({ props: { stepName } }) => {
      return activeStep === stepName
    })

    return (
      <StepperContext.Provider value={extraProps}>
        {child}
      </StepperContext.Provider>
    )
  }
}

Stepper.propTypes = {
  basename: PropTypes.string,
  activeStep: PropTypes.string,
  finishCallback: PropTypes.func,
  children: PropTypes.node,
  history: PropTypes.shape({
    entries: PropTypes.array,
    go: PropTypes.func,
    goBack: PropTypes.func,
    listen: PropTypes.func,
    location: PropTypes.object,
    push: PropTypes.func,
    replace: PropTypes.func
  })
}

Stepper.defaultProps = {
  basename: '',
  finishCallback: () => {}
}

export default Stepper
