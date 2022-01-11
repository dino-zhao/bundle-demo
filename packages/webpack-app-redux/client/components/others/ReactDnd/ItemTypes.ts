export const ItemTypes = {
  CARD: 'card',
}

export const CARD = Symbol('card')
export interface DragObject {
  id: string
  index: number
}
