// Modules
import React, { useEffect, useRef } from 'react'
// Components
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
// Styles
const styles = {
  messagesContainer: {
    height: '100%',
    width: '100%',
  },
  newMessage: {
    backgroundColor: '#3578E5',
    borderRadius: '8px',
    color: '#FFFFFF',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '12px',
    width: '65%',
  },
  newMessageContainer: {
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'flex-end',
    width: '100%',
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    padding: '12px',
    width: '65%',
  },
  receivedMessageContainer: {
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'flex-start',
    width: '100%',
  },
}

const Message = ({ messages }: { messages: string[] }) => {
  // References
  const listRef = useRef<any>({})
  const rowHeights = useRef<any>({})

  //   useEffect(() => {
  //     if (messages.length > 0) {
  //       scrollToBottom()
  //     }
  //     // eslint-disable-next-line
  //   }, [messages])

  function getRowHeight(index: number) {
    return rowHeights.current[index] + 8 || 82
  }

  function Row({ index, style }: { index: number; style: any }) {
    const rowRef = useRef<any>({})

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.clientHeight)
      }
      // eslint-disable-next-line
    }, [rowRef])

    return (
      <div style={style}>
        <div ref={rowRef} style={styles.receivedMessageContainer}>
          <div style={styles.receivedMessage}>
            <span>{messages[index]}</span>
          </div>
        </div>
      </div>
    )
  }

  function setRowHeight(index: number, size: number) {
    listRef.current.resetAfterIndex(0)
    rowHeights.current = { ...rowHeights.current, [index]: size }
  }

  //   function scrollToBottom() {
  //     listRef.current.scrollToItem(messages.length - 1, 'end')
  //   }

  return (
    <AutoSizer style={styles.messagesContainer}>
      {({ height, width }) => (
        <List
          className="List"
          height={height - 74}
          itemCount={messages.length}
          itemSize={getRowHeight}
          ref={listRef}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  )
}

export default Message
