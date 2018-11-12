<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@easyguide/stepper](#easyguidestepper)
  - [Install](#install)
  - [Usage](#usage)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @easyguide/stepper

> Camponents stepper ui

[![NPM](https://img.shields.io/npm/v/@easyguide/stepper.svg)](https://www.npmjs.com/package/@easyguide/stepper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @easyguide/stepper
```

## Usage

```jsx
import React, {Component} from 'react'

import Stepper, {Step} from '@easyguide/stepper'

const Step = withStep(({ previous, next, activeStep }) => (
  <section data-testid="step">
    <h1>{activeStep}</h1>
    <p>description</p>
    <button onClick={previous} data-testid="step-previous-button">
      previous
    </button>
    <button onClick={next} data-testid="step-next-button">
      next
    </button>
  </section>
))

class Example extends Component {
  render() {
    return (
      <Stepper>
        <Step stepName="step 1" />
        <Step stepName="step 2" />
      </Stepper>
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
