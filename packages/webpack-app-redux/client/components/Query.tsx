import React from "react";
import { useGetPokemonByNameQuery, useLogMutation } from "../services/pokemon";
export default function Query() {
  //   const [skip, setSkip] = React.useState(true);
  const { data, error, isLoading, refetch } =
    useGetPokemonByNameQuery(undefined);
  const [doLog, { isLoading: isLoging }] = useLogMutation();
  return (
    <div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{JSON.stringify(data)}</h3>
          </>
        ) : null}
      </div>
      <div>
        <button onClick={refetch}>test</button>
        {/* <button onClick={() => setSkip((prev) => !prev)}>
          Toggle Skip ({String(skip)})
        </button> */}
      </div>
      <div
        onClick={() => {
          doLog(undefined)
            .unwrap()
            .then((res) => {
              console.log(res);
            });
        }}
      >
        log{isLoging}
      </div>
      <div>
        <QueryOne></QueryOne>
      </div>
    </div>
  );
}

function QueryOne() {
  const { data } = useGetPokemonByNameQuery(undefined);

  return (
    <div>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}
