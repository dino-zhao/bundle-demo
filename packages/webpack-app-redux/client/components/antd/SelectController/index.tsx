import { Select } from 'antd'
import { useState } from 'react'
const { Option } = Select
function onChange(value) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

const list = [1, 2, 3]
export default function SelectController() {
  const [state, setState] = useState(list)

  function onSearch() {
    setTimeout(() => {
      setState([4, 5, 6])
    }, 500)
  }
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      onSearch={onSearch}
      options={state.map((item) => {
        return {
          label: item,
          value: item,
        }
      })}
    ></Select>
  )
}
