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

class Example extends Component {
  render() {
    return (
      <Stepper>
        <Step>
          {({previous, next}) => (
            <div>
              <h1>First</h1>
              <p>description</p>
              <button onClick={previous}>prev</button>
              <button onClick={next}>next</button>
            </div>
          )}
        </Step>
        <Step>
          {({previous, next}) => (
            <div>
              <h1>Second</h1>
              <p>description</p>
              <button onClick={previous}>prev</button>
              <button onClick={next}>next</button>
            </div>
          )}
        </Step>
      </Stepper>
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
