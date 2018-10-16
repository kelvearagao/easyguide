<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@easyguide/select](#easyguideselect)
  - [Install](#install)
  - [Usage simple select](#usage-simple-select)
  - [Usage select with live search](#usage-select-with-live-search)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @easyguide/select

> Camponents select ui

[![NPM](https://img.shields.io/npm/v/@easyguide/select.svg)](https://www.npmjs.com/package/@easyguide/select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @easyguide/select
```

## Usage simple select

```jsx
import React, {Fragment} from 'react'
import Select from '@easyguide/select'

class Example extends Component {
  render() {
    const data = [{key: 1, value: 'Option 1'}, {key: 2, value: 'Option 2'}]

    return (
      <Fragment>
        <Select
          data={data}
          onChange={item => console.log(`value:${item.value}`)}
          render={item => (
            <div>
              <span>
                <img
                  style={{
                    marginRight: 10,
                    verticalAlign: 'bottom',
                  }}
                  width="20"
                  height="20"
                  src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/04.Bank-512.png"
                />
                <span>{item.value}</span>
              </span>
            </div>
          )}
          renderListItem={item => `${item.key} - ${item.value}`}
        />
      </Fragment>
    )
  }
}
```

## Usage select with live search

```jsx
import React, {Fragment} from 'react'
import Select from '@easyguide/select'

class Example extends Component {
  render() {
    const data = [{key: 1, value: 'Option 1'}, {key: 2, value: 'Option 2'}]

    return (
      <Fragment>
        <Select
          liveSearch
          data={data}
          placeholder="Digite uma opção"
          onChange={item => console.log(`value:${item.value}`)}
          renderListItem={item => `${item.key} - ${item.value}`}
          render={item => (
            <div>
              <span>
                <img
                  style={{
                    marginRight: 10,
                    verticalAlign: 'bottom',
                  }}
                  width="20"
                  height="20"
                  src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/04.Bank-512.png"
                />
                <span>{item.value}</span>
              </span>
            </div>
          )}
        />
      </Fragment>
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
