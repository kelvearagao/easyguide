<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@easyguide/checkbox](#easyguidecheckbox)
  - [Install](#install)
  - [Usage simple checkbox](#usage-simple-checkbox)
  - [Usage checkbox with selected values](#usage-checkbox-with-selected-values)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @easyguide/checkbox

> Camponents checkbox ui

[![NPM](https://img.shields.io/npm/v/@easyguide/checkbox.svg)](https://www.npmjs.com/package/@easyguide/checkbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @easyguide/checkbox
```

## Usage simple checkbox

```jsx
import React from 'react'
import Checkbox from '@easyguide/checkbox'

class Example extends Component {
  render() {
    const items = [
      {value: 1, label: 'IPCA'},
      {value: 2, label: 'CDI'},
      {value: 3, label: 'PRÉ'},
    ]

    return (
      <Checkbox
        label="Tipo de rentabilidade"
        items={items}
        onChange={value => console.log(value)}
      />
    )
  }
}
```

## Usage checkbox with selected values

```jsx
import React from 'react'
import Checkbox from '@easyguide/checkbox'

class Example extends Component {
  render() {
    const items = [
      {value: 1, label: 'IPCA'},
      {value: 2, label: 'CDI'},
      {value: 3, label: 'PRÉ'},
    ]

    return (
      <Checkbox
        label="Tipo de rentabilidade"
        items={items}
        value={[1, 3]}
        onChange={value => console.log(value)}
      />
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
