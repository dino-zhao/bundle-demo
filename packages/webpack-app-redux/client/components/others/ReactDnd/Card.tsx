import { forwardRef, useImperativeHandle, useRef } from 'react'
import {
  ConnectDropTarget,
  ConnectDragSource,
  DropTargetMonitor,
  DragSourceMonitor,
  DragSource,
  DropTarget,
  DropTargetConnector,
  DragSourceConnector,
} from 'react-dnd'

import { CARD, DragObject } from './ItemTypes'
import { XYCoord } from 'dnd-core'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export interface CardProps {
  id: string
  children: React.ReactElement
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void

  isDragging: boolean
  connectDragSource: ConnectDragSource
  connectDropTarget: ConnectDropTarget
}

interface CardInstance {
  getNode(): HTMLDivElement | null
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, isDragging, connectDragSource, connectDropTarget },
  ref
) {
  const elementRef = useRef(null)
  connectDragSource(elementRef)
  connectDropTarget(elementRef)

  const opacity = isDragging ? 0 : 1
  useImperativeHandle<any, CardInstance>(ref, () => ({
    getNode: () => elementRef.current,
  }))
  return (
    <div ref={elementRef} style={{ ...style, opacity }}>
      {children}
    </div>
  )
})

export default DropTarget(
  CARD,
  {
    hover(
      props: CardProps,
      monitor: DropTargetMonitor,
      component: CardInstance
    ) {
      if (!component) {
        return null
      }
      // node = HTML Div element from imperative API
      const node = component.getNode()
      if (!node) {
        return null
      }

      const dragIndex = monitor.getItem<DragObject>().index
      const hoverIndex = props.index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = node.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem<DragObject>().index = hoverIndex
    },
  },
  (connect: DropTargetConnector) => ({
    connectDropTarget: connect.dropTarget(),
  })
)(
  DragSource(
    CARD,
    {
      beginDrag: (props: CardProps) => ({
        id: props.id,
        index: props.index,
      }),
    },
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  )(Card)
)
