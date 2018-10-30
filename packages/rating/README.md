<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@easyguide/rating](#easyguiderating)
  - [Install](#install)
  - [Usage Rating](#usage-rating)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @easyguide/rating

> Components rating ui

[![NPM](https://img.shields.io/npm/v/@easyguide/rating.svg)](https://www.npmjs.com/package/@easyguide/rating) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @easyguide/rating
```

## Usage Rating

```jsx
import React, {Fragment} from 'react'
import Rating from '@easyguide/rating'

class Example extends Component {
  render() {
    return (
      <Fragment>
        <Rating
          initialRating={2}
          onChange={value => console.log(value)}
        />
      </Fragment>
    )
  }
}
```

## License

MIT © [iamtchelo](https://github.com/iamtchelo)
