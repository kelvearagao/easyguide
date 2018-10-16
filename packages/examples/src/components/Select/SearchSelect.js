import React, {Component, Fragment} from 'react'
import Select from '@easyguide/select/dist'

const data = [
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

class SearchSelect extends Component {
  render() {
    return (
      <Fragment>
        <Select
          liveSearch
          data={data}
          placeholder="Digite uma opção"
          onChange={item => console.log(`value:${item.value}`)}
          renderListItem={item => `${item.key} - ${item.name}`}
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
        />
      </Fragment>
    )
  }
}

export default SearchSelect
