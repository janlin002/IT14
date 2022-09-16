import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

function ReactSelect() {
  const [chooseItem, setChooseItem] = useState('')
  return (
    <div style={{ width: '30%' }}>
      <Select
        options={options}
        onChange={(item) => setChooseItem(item.value)}
        placeholder="請選擇"
        defaultValue={options[0]}
        isMulti // 多選
        closeMenuOnSelect={false} // 選擇時，不會關閉select選單
        defaultMenuIsOpen // select預設為開，預設是false
        // autoFocus={false} // 進入頁面直接focus，預設是false
      />
      {chooseItem}
    </div>

  )
}

export default ReactSelect
