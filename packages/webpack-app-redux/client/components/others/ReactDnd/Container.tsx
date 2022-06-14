import { FC, useState } from 'react'
import Card from './Card'
import { useImmer } from 'use-immer'
import { Checkbox } from 'antd'

const style = {
  width: '100%',
}

export interface Item {
  id: string
  text: string
}
export interface ContainerState {
  cards: Item[]
}

export const Container: FC = () => {
  const [checked, setCheck] = useState(['1'])
  const [cards, setCards] = useImmer([
    {
      id: '1',
      text: 'Write a cool JS library',
    },
    {
      id: '2',
      text: 'Make it generic enough',
    },
    {
      id: '3',
      text: 'Write README',
    },
  ])
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex]
    setCards((draft) => {
      draft.splice(dragIndex, 1)
      draft.splice(hoverIndex, 0, dragCard)
    })
  }
  const onChange = (checkedValues: string[]) => {
    console.log('checked = ', checkedValues)
    setCheck(checkedValues)
  }
  return (
    <div style={style}>
      <Checkbox.Group value={checked} onChange={onChange}>
        {cards.map((card, i) => (
          <Card key={card.id} index={i} id={card.id} moveCard={moveCard}>
            <div>
              <Checkbox value={card.id}>{card.id}</Checkbox>
              {card.text}
            </div>
          </Card>
        ))}
      </Checkbox.Group>
    </div>
  )
}
