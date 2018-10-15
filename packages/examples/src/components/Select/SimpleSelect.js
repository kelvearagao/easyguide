import React, {Component, Fragment} from 'react'
import Select from '@easyguide/select/dist'
import styled from 'react-emotion'

const Button = styled.button`
  padding: 10px 0;
  color: #666;
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;

  &:hover {
    color: #3CCBDA;
  }
`

const reducedData = [
  { key: '537', value: 1, name: 'Banco do Brasil' },
  { key: '978', value: 2, name: 'Banco Central do Brasil' },
  { key: '445', value: 3, name: 'Banco da Amazônia' },
  { key: '548', value: 4, name: 'Banco do Nordeste do Brasil' }
]

const realData = [
  { key: '537', value: 1, name: 'Banco do Brasil' },
  { key: '978', value: 2, name: 'Banco Central do Brasil' },
  { key: '445', value: 3, name: 'Banco da Amazônia' },
  { key: '548', value: 4, name: 'Banco do Nordeste do Brasil' },
  { key: '784', value: 5, name: 'Banco Nacional de Desenvolvimento' },
  { key: '834', value: 6, name: 'Banco do Estado do Espírito Santo' },
  { key: '324', value: 7, name: 'Banco de Desenvolvimento de Minas' },
  { key: '965', value: 8, name: 'Banco do Estado do Pará' },
  { key: '354', value: 9, name: 'Banco do Estado do Rio Grande do Sul' },
  { key: '974', value: 10, name: 'Banco do Estado de Sergipe' },
  { key: '908', value: 11, name: 'Banco de Brasília' }
]

class SimpleSelect extends Component {
  state = {
    data: reducedData
  }

  loadOptions = () => {
    setTimeout(() => {
      this.setState({
        data: realData,
        isFetched: true
      })
    }, 500)
  }

  fetchDataButton = () => {
    const {isFetched} = this.state

    if (isFetched) {
      return null
    }

    return (
      <Button
        onClick={() => {
          this.loadOptions()
        }}
      >
        Ver lista completa
      </Button>
    )
  }

  render() {
    const {data} = this.state

    return (
      <Fragment>
        <Select
          data={data}
          onChange={value => console.log(`value:${value}`)}
          render={item => (
            <div>
              <span>
                <img
                  style={{
                    marginRight: 10,
                    verticalAlign: 'bottom'
                  }}
                  width="20"
                  height="20"
                  src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/04.Bank-512.png"
                />
                <span>{item.name}</span>
              </span>
            </div>
          )}
          renderListItem={item => `${item.key} - ${item.name}`}
          renderCustomListItem={this.fetchDataButton}
        />
      </Fragment>
    )
  }
}

export default SimpleSelect
