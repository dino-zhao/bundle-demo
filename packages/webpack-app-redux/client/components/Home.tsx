import React, { useContext, useEffect, useMemo } from "react";
import Query from "./Query";
import Counter from "./Counter";
import Book from "./Book";
import ValidContext from "./ValidContext";

export interface ContextType {
  state: { a: number };
  setObj: (v: number) => void;
}

export const MyContext = React.createContext<ContextType>({
  state: { a: 1 },
  setObj: (v: number) => {},
});
export default function Home({ setObj, state }: ContextType) {
  return (
    <MyContext.Provider value={{ setObj, state }}>
      <Counter />
      {/* <Query /> */}
      {/* <Book /> */}
      <ValidContext />
      <div onClick={() => console.log(state.a)}>{state.a}</div>
    </MyContext.Provider>
  );
}
