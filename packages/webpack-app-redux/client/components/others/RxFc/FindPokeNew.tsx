import { from } from 'rxjs'
import { Input } from 'antd'
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  mergeMap,
} from 'rxjs/operators'
import { useObservableState, pluckCurrentTargetValue } from 'observable-hooks'

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

export default function FindPokeNew() {
  const [search, setSearch] = useObservableState<
    string,
    React.FormEvent<HTMLInputElement>
  >(pluckCurrentTargetValue, '')
  const [text, setText] = useObservableState<
    PokeItem[],
    React.ChangeEvent<HTMLInputElement>
  >((e) =>
    e.pipe(
      pluckCurrentTargetValue,
      filter((val) => {
        return val.length > 0
      }),
      debounceTime(750),
      distinctUntilChanged(),
      mergeMap((val) => from(getPokemonByName(val)))
    )
  )
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e)
    setText(e)
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
        {JSON.stringify(text)}
      </div>
    </div>
  )
}
