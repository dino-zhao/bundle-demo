import { useState, useEffect, useLayoutEffect } from 'react'

export default function RenderOrder() {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log('parents effect' + state)
  }, [state])
  useLayoutEffect(() => {
    console.log('parents layout effect' + state)
  }, [state])
  console.log('parent exec' + state)
  return (
    <div>
      <button onClick={() => setState((c) => c + 1)}>change</button>
      <Children state={state} />
      {state}
    </div>
  )
}

function Children({ state }: { state: number }) {
  useEffect(() => {
    console.log('child effect' + state)
  }, [state])
  useLayoutEffect(() => {
    console.log('child layout effect' + state)
  }, [state])
  console.log('child exec' + state)
  return <div>children{state}</div>
}
