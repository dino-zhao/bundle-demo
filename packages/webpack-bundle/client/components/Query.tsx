import React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";
export default function Query() {
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
