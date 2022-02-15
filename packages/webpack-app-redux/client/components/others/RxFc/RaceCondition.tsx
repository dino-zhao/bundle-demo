import { from, switchMap } from 'rxjs'
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
let index = 0
const getPokemonByName = async (name: string) => {
  const { results: allPokemons } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=100'
  ).then((res) => res.json())
  //两次输入为一组，第一个输入会慢，第二个会快，
  if (index > 1) {
    index = 0
  } else {
    index += 2
  }

  const getData = new Promise<PokeItem[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(
        allPokemons.filter((pokemon: { name: string }) =>
          pokemon.name.includes(name)
        )
      )
    }, index * 1000)
  })

  const v = await getData
  console.log(v, index, name)
  return v
}

export default function RaceCondition() {
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
        console.log(val)
        return val.length > 0
      }),
      distinctUntilChanged(),
      switchMap((val) => from(getPokemonByName(val)))
      //   mergeMap((val) => from(getPokemonByName(val)))
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
      <div>{JSON.stringify(text)}</div>
    </div>
  )
}
