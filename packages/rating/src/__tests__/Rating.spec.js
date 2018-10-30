import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Rating from '../Rating.js'

describe('<Rating />', () => {
  it('should render correctly', () => {
    const rtl = render(<Rating />)
    const stars = rtl.container.querySelector('div').children

    expect(rtl.container.children).toHaveLength(1)
    expect(stars).toHaveLength(5)
  })

  it('should render with maxRating props', () => {
    const rtl = render(<Rating maxRating={10} />)
    const stars = rtl.container.querySelector('div').children
    
    expect(stars).toHaveLength(10)
  })

  it('should render captions correctly', () => {
    const ratingCaptions = {
      1: 'Muito Ruim',
      2: 'Ruim',
      3: 'Regular',
      4: 'Bom',
      5: 'Ótimo'
    }

    const rtl = render(<Rating ratingCaptions={ratingCaptions} />)

    Object.values(ratingCaptions)
      .forEach(caption => {
        expect(rtl.getByText(caption)).toBeInTheDocument()
      })
  })

  it('should render correctly with custom symbols', () => {
    const symbols = {
      empty: <span data-testid="empty-symbol">EMPTY_SYMBOL</span>,
      full: <span data-testid="full-symbol">FULL_SYMBOL</span>
    }

    const rtl = render(
      <Rating
        emptySymbol={symbols.empty}
        fullSymbol={symbols.full}
      />
    )

    expect(rtl.getByTestId('empty-symbol')).toBeInTheDocument()
    expect(rtl.getByTestId('full-symbol')).toBeInTheDocument()
  })

  it('should dispatch onChange when an item is clicked', () => {
    const onChange = jest.fn(value => value)
    const rtl = render(<Rating onChange={onChange} />)
    const stars = rtl.container.querySelector('div').children

    fireEvent.click(stars[1])

    expect(onChange).toHaveBeenCalledWith(4)
  })
})
