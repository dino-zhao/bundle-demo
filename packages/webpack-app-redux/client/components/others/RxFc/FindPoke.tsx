import { BehaviorSubject, Observable, from } from 'rxjs'
import { useEffect, useState } from 'react'
import { Input } from 'antd'
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  mergeMap,
} from 'rxjs/operators'

interface PokeItem {
  name: string
}
const getPokemonByName = async (name: string) => {
  const { results: allPokemons } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=100'
  ).then((res) => res.json())
  return allPokemons.filter((pokemon: { name: string }) =>
    pokemon.name.includes(name)
  )
}

const searchSubject = new BehaviorSubject('')
const searchResultObservable = searchSubject.pipe(
  filter((val) => {
    return val.length > 0
  }),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((val) => from(getPokemonByName(val)))
)

function useObservable<T>(observable: Observable<any>, setter: (v: T) => void) {
  useEffect(() => {
    let subscription = observable.subscribe((result: T) => {
      setter(result)
    })
    return () => subscription.unsubscribe()
  }, [observable, setter])
}

export default function FindPoke() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState<PokeItem[]>([])
  useObservable(searchResultObservable, setResult)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearch(newValue)
    searchSubject.next(newValue)
  }
  return (
    <div>
      <div>
        <Input type="text" value={search} onChange={handleSearchChange} />
      </div>
      <div>
        {/* {result.map((item) => {
          return item.name
        })} */}
        {JSON.stringify(result)}
      </div>
    </div>
  )
}
