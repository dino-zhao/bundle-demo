import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@redux/store";
import { decrement, increment } from "@redux/counter/slice";
import { useGetPokemonByNameQuery, pokemonApi } from "../services/pokemon";
export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [skip, setSkip] = React.useState(true);
  const { data, error, isLoading, refetch } = useGetPokemonByNameQuery(
    "bulbasaur",
    {
      skip,
    }
  );
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment1
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data}</h3>
          </>
        ) : null}
      </div>
      <div>
        <button onClick={refetch}>test</button>
        <button onClick={() => setSkip((prev) => !prev)}>
          Toggle Skip ({String(skip)})
        </button>
      </div>
    </div>
  );
}
